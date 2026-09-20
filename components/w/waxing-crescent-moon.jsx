import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi015tbty.css';
import '../../css/u/u50yvab1y.css';
import '../../css/e/erii6lbpv.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';
import '../../css/u/ulqv-3scp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi015tbty"/><circle class="u50yvab1y"/><path class="erii6lbpv"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><path class="ulqv-3scp"/></g>`,
		"fallback": "openmoji:waxing-crescent-moon",
	});
}

export default Component;

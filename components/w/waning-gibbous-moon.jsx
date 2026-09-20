import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulqv-3scp.css';
import '../../css/w/w4cjl-9wk.css';
import '../../css/t/t9n169xkc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGV7zeQdEC" class="ulqv-3scp"/></defs><use href="#SVGV7zeQdEC"/><circle class="w4cjl-9wk"/><path class="t9n169xkc"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><use href="#SVGV7zeQdEC"/></g>`,
		"fallback": "openmoji:waning-gibbous-moon",
	});
}

export default Component;

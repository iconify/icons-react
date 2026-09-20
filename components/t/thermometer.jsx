import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egw7cbbvg.css';
import '../../css/v/v3s5d0kbf.css';
import '../../css/b/bw6kpcr9v.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f2f2ngb3c.css';
import '../../css/s/s3-_oacqu.css';
import '../../css/x/xqkoae25o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egw7cbbvg"/><path class="v3s5d0kbf"/><path class="bw6kpcr9v"/><g class="jn8qy4bru"><path class="f2f2ngb3c"/><path class="s3-_oacqu"/><path class="xqkoae25o"/></g>`,
		"fallback": "openmoji:thermometer",
	});
}

export default Component;

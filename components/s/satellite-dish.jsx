import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l16ez9l5b.css';
import '../../css/x/xscrq6bvx.css';
import '../../css/t/t02gyh2bc.css';
import '../../css/z/zz0c21b1y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l16ez9l5b"/><path class="xscrq6bvx"/><path class="t02gyh2bc"/><path class="zz0c21b1y"/></g>`,
		"fallback": "streamline-flex-color:satellite-dish",
	});
}

export default Component;

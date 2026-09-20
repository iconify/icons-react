import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/x/xk2d1_bao.css';
import '../../css/z/z34odrbhq.css';
import '../../css/f/f8qe98sbx.css';
import '../../css/c/clvwm9bul.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="xk2d1_bao"/><path class="z34odrbhq"/><path class="f8qe98sbx"/><path class="clvwm9bul"/></g>`,
		"fallback": "streamline-stickies-color:telescope",
	});
}

export default Component;

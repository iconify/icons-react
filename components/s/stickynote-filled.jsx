import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdy1asb3s.css';
import '../../css/u/ulof31eud.css';
import '../../css/m/mdxy78itc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdy1asb3s"/><path class="ulof31eud"/><path class="mdxy78itc"/></g>`,
		"fallback": "reicon:stickynote-filled",
	});
}

export default Component;

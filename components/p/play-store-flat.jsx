import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hq042bbbv.css';
import '../../css/m/mxb_dmbyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hq042bbbv"/><path clip-rule="evenodd" class="mxb_dmbyx"/></g>`,
		"fallback": "streamline-color:play-store-flat",
	});
}

export default Component;

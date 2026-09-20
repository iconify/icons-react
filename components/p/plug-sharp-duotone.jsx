import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/emhh_6bfz.css';
import '../../css/u/uvsqb_-sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="emhh_6bfz"/><path class="uvsqb_-sh"/></g>`,
		"fallback": "keyline-icons:plug-sharp-duotone",
	});
}

export default Component;

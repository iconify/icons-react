import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fs-evbclu.css';
import '../../css/m/mlc1znltn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fs-evbclu"/><path class="mlc1znltn"/></g>`,
		"fallback": "keyline-icons:user-minus-sharp-duotone",
	});
}

export default Component;

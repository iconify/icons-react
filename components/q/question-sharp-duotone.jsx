import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j4dkdobnv.css';
import '../../css/t/tjvuacchn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j4dkdobnv"/><path class="tjvuacchn"/></g>`,
		"fallback": "keyline-icons:question-sharp-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/ro89z15uz.css';
import '../../css/m/mpzgj1bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ro89z15uz"/><path class="mpzgj1bhx"/></g>`,
		"fallback": "keyline-icons:mail-open-sharp-duotone",
	});
}

export default Component;

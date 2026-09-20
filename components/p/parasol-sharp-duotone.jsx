import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vouuno7_m.css';
import '../../css/d/d34ut4blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vouuno7_m"/><path class="d34ut4blf"/></g>`,
		"fallback": "keyline-icons:parasol-sharp-duotone",
	});
}

export default Component;

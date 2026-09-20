import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mteiww2oe.css';
import '../../css/z/z-5xihbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mteiww2oe"/><path class="z-5xihbkl"/></g>`,
		"fallback": "keyline-icons:paint-roller-sharp-two-tone",
	});
}

export default Component;

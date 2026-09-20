import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhkb8obdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhkb8obdm"/>`,
		"fallback": "mynaui:microchip-solid",
	});
}

export default Component;

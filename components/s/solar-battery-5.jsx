import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqlq5clhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqlq5clhz"/>`,
		"fallback": "cbi:solar-battery-5",
	});
}

export default Component;

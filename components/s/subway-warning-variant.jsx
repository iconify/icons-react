import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwm8xi_bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwm8xi_bv"/>`,
		"fallback": "mdi:subway-warning-variant",
	});
}

export default Component;

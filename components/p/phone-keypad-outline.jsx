import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue_bxib8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue_bxib8i"/>`,
		"fallback": "mdi:phone-keypad-outline",
	});
}

export default Component;

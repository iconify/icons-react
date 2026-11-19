import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcu6ucb8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcu6ucb8b"/>`,
		"fallback": "selfhst:uruky-light",
	});
}

export default Component;

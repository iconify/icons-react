import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssck75ytp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssck75ytp"/>`,
		"fallback": "fa-brands:telegram-plane",
	});
}

export default Component;

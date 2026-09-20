import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8n5v4uuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8n5v4uuz"/>`,
		"fallback": "mdi:order-numeric-descending",
	});
}

export default Component;

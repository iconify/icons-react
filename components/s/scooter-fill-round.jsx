import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp7w3xhkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp7w3xhkb"/>`,
		"fallback": "coolicons:scooter-fill-round",
	});
}

export default Component;

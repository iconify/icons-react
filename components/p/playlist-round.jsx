import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeucowb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeucowb8u"/>`,
		"fallback": "coolicons:playlist-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgfrnkb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgfrnkb2u"/>`,
		"fallback": "circum:music-note-1",
	});
}

export default Component;

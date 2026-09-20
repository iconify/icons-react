import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm43ohb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm43ohb8t"/>`,
		"fallback": "pixelarticons:keyboard-music-sharp",
	});
}

export default Component;

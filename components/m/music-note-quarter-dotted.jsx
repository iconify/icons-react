import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8g0t5nob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8g0t5nob"/>`,
		"fallback": "mdi:music-note-quarter-dotted",
	});
}

export default Component;

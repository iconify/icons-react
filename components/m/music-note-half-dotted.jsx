import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhjc9obbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhjc9obbf"/>`,
		"fallback": "mdi:music-note-half-dotted",
	});
}

export default Component;

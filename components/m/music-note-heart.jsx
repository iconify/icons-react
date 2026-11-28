import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5-b18bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5-b18bqd"/>`,
		"fallback": "noviair-light:music-note-heart",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl1yt9bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl1yt9bmf"/>`,
		"fallback": "nrk:music-note-solid-expressive",
	});
}

export default Component;

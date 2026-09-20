import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw72m4boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw72m4boy"/>`,
		"fallback": "mdi:music-note-add",
	});
}

export default Component;

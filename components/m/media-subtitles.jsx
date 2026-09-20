import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oysdye0wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oysdye0wl"/>`,
		"fallback": "nrk:media-subtitles",
	});
}

export default Component;

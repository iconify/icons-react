import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6sjh55au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6sjh55au"/>`,
		"fallback": "noviair:music-note-plus",
	});
}

export default Component;

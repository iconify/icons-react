import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kntnny_5o.css';
import '../../css/v/vad0ixbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kntnny_5o"/><path class="vad0ixbtv"/></g>`,
		"fallback": "withicons-retro:list-music",
	});
}

export default Component;

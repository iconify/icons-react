import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s9124cc9w.css';
import '../../css/y/ytdnicbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s9124cc9w"/><path class="ytdnicbya"/></g>`,
		"fallback": "iconaut:north-star-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yaxz46btv.css';
import '../../css/i/i3x60pv6c.css';
import '../../css/v/vb9y1jb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yaxz46btv"/><path class="i3x60pv6c"/><path class="vb9y1jb1s"/></g>`,
		"fallback": "iconaut:utensils-crossed",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fukmeobbs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sdadatb0l.css';
import '../../css/d/d7nqjgwls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fukmeobbs secondary"/><g class="dt0cm9dhy primary"><path class="sdadatb0l"/><path class="d7nqjgwls"/></g>`,
		"fallback": "iconaut:twitch-duo",
	});
}

export default Component;

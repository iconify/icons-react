import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqoua65yl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/it6ujub8j.css';
import '../../css/j/jbjcviqqk.css';
import '../../css/j/jr68libbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqoua65yl secondary"/><g class="dt0cm9dhy primary"><path class="it6ujub8j"/><path class="jbjcviqqk"/><path class="jr68libbw"/></g>`,
		"fallback": "iconaut:user-alert-duo",
	});
}

export default Component;

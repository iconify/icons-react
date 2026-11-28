import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ig0io4b2g.css';
import '../../css/w/wu92ygrfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ig0io4b2g"/><path class="wu92ygrfy"/></g>`,
		"fallback": "iconaut:trending-up",
	});
}

export default Component;

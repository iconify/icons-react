import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqoua65yl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/it6ujub8j.css';
import '../../css/z/z9hs4nbjp.css';
import '../../css/v/vyl94b6xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqoua65yl secondary"/><g class="dt0cm9dhy primary"><path class="it6ujub8j"/><path class="z9hs4nbjp"/><path class="vyl94b6xe"/></g>`,
		"fallback": "iconaut:user-arrow-right-duo",
	});
}

export default Component;

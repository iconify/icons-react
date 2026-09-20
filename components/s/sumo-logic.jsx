import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esij82b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esij82b-z"/>`,
		"fallback": "thesvg:sumo-logic",
	});
}

export default Component;

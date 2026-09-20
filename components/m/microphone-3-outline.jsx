import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_0bqujjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_0bqujjd"/>`,
		"fallback": "solar:microphone-3-outline",
	});
}

export default Component;

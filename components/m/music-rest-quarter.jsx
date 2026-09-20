import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q234p0z5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q234p0z5w"/>`,
		"fallback": "mdi:music-rest-quarter",
	});
}

export default Component;

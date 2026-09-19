import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0ko1jb1z.css';

const viewBox = {"width":368,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0ko1jb1z"/>`,
		"fallback": "zmdi:tap-and-play",
	});
}

export default Component;

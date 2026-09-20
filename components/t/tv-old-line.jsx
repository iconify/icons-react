import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgve4ur3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgve4ur3u"/>`,
		"fallback": "majesticons:tv-old-line",
	});
}

export default Component;

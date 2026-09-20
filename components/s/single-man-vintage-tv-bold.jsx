import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw4x6rw-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw4x6rw-b"/>`,
		"fallback": "streamline-ultimate:single-man-vintage-tv-bold",
	});
}

export default Component;

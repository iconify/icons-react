import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fssh11-nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fssh11-nv"/>`,
		"fallback": "pixelarticons:speed-slow",
	});
}

export default Component;

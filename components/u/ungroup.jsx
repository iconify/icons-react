import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dio5em1vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dio5em1vb"/>`,
		"fallback": "pixelarticons:ungroup",
	});
}

export default Component;

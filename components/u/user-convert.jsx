import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4wa76bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4wa76bjo"/>`,
		"fallback": "mdi:user-convert",
	});
}

export default Component;

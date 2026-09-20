import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kocj6_b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kocj6_b-l"/>`,
		"fallback": "streamline-freehand:plugin-hands-puzzle",
	});
}

export default Component;

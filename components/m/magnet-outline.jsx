import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u37-xachj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u37-xachj"/>`,
		"fallback": "solar:magnet-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0kd9s2qb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w0kd9s2qb"/>`,
		"fallback": "streamline:mouse-wireless-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6o4olbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6o4olbrb"/>`,
		"fallback": "mdi:keyboard-f6",
	});
}

export default Component;

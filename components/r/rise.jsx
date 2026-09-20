import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tok7ryb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tok7ryb6o"/>`,
		"fallback": "token:rise",
	});
}

export default Component;

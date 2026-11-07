import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9o-8lbqq.css';
import '../../css/f/f9lebcb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9o-8lbqq"/><path clip-rule="evenodd" class="f9lebcb9u"/>`,
		"fallback": "solar:walking-bold",
	});
}

export default Component;

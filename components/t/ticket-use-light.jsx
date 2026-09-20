import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h16uuw9kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h16uuw9kq"/>`,
		"fallback": "lets-icons:ticket-use-light",
	});
}

export default Component;

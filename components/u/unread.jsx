import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1h9l5vao.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1h9l5vao"/>`,
		"fallback": "entypo:unread",
	});
}

export default Component;

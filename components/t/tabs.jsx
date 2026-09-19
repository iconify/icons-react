import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkq23losc.css';

const viewBox = {"width":717,"height":669};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkq23losc"/>`,
		"fallback": "ls:tabs",
	});
}

export default Component;

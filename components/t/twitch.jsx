import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zin055xwc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zin055xwc"/>`,
		"fallback": "selfhst:twitch",
	});
}

export default Component;

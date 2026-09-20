import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfa2ujxbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfa2ujxbz"/>`,
		"fallback": "thesvg:pusher",
	});
}

export default Component;

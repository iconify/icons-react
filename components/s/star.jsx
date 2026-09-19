import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu42j5gbg.css';

const viewBox = {"width":778,"height":739};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu42j5gbg"/>`,
		"fallback": "ls:star",
	});
}

export default Component;

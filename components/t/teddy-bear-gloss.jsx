import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjsozkb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjsozkb8q"/>`,
		"fallback": "withicons:teddy-bear-gloss",
	});
}

export default Component;

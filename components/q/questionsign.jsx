import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wao21ccuq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wao21ccuq"/>`,
		"fallback": "whh:questionsign",
	});
}

export default Component;

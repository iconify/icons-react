import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1bwu8bhb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1bwu8bhb"/>`,
		"fallback": "whh:molecule",
	});
}

export default Component;

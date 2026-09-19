import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5zy_5-qj.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5zy_5-qj"/>`,
		"fallback": "whh:squarequora",
	});
}

export default Component;

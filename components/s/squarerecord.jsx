import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_xu1cb5b.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_xu1cb5b"/>`,
		"fallback": "whh:squarerecord",
	});
}

export default Component;

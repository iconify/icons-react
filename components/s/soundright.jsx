import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd8d28bqv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd8d28bqv"/>`,
		"fallback": "whh:soundright",
	});
}

export default Component;

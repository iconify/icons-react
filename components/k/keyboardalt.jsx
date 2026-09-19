import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fms-4tbig.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fms-4tbig"/>`,
		"fallback": "whh:keyboardalt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8y7v2bwb.css';

const viewBox = {"width":1024,"height":641};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8y7v2bwb"/>`,
		"fallback": "whh:resizehorizontal",
	});
}

export default Component;

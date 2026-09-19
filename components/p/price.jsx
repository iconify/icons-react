import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4kr70i4v.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4kr70i4v"/>`,
		"fallback": "whh:price",
	});
}

export default Component;

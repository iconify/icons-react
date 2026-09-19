import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-o4yhv6j.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-o4yhv6j"/>`,
		"fallback": "whh:mailinglists",
	});
}

export default Component;

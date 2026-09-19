import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1lw2cc6p.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1lw2cc6p"/>`,
		"fallback": "whh:subscript",
	});
}

export default Component;

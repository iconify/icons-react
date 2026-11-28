import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd7wst1lh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd7wst1lh"/>`,
		"fallback": "pullo:user-slash-thin",
	});
}

export default Component;

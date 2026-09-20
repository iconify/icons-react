import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4oeq0bqi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4oeq0bqi"/>`,
		"fallback": "pepicons-pencil:triangle-up",
	});
}

export default Component;

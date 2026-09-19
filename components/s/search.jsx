import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai8j4uodp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai8j4uodp"/>`,
		"fallback": "fa7-solid:search",
	});
}

export default Component;

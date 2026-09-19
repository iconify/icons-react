import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j27f_maji.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j27f_maji"/>`,
		"fallback": "pepicons:tool",
	});
}

export default Component;

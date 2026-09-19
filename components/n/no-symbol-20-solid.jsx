import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uky4vab5v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uky4vab5v"/>`,
		"fallback": "heroicons:no-symbol-20-solid",
	});
}

export default Component;

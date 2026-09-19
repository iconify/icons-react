import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejywhnpur.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejywhnpur"/>`,
		"fallback": "fa7-solid:shower",
	});
}

export default Component;

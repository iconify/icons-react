import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1obkzh-b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1obkzh-b"/>`,
		"fallback": "fa7-solid:smoking",
	});
}

export default Component;

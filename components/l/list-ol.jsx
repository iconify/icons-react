import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt9mulbfl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt9mulbfl"/>`,
		"fallback": "fa7-solid:list-ol",
	});
}

export default Component;

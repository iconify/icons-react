import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs4k7ccaa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs4k7ccaa"/>`,
		"fallback": "fa7-solid:strikethrough",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6fobm8hu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6fobm8hu"/>`,
		"fallback": "fa7-solid:tents",
	});
}

export default Component;

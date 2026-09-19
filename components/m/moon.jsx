import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o38fj1wuw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o38fj1wuw"/>`,
		"fallback": "fa7-regular:moon",
	});
}

export default Component;

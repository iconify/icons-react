import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eusz6zx6k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eusz6zx6k"/>`,
		"fallback": "fa7-solid:person-chalkboard",
	});
}

export default Component;

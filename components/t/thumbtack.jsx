import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3e-qgj5t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3e-qgj5t"/>`,
		"fallback": "fa7-solid:thumbtack",
	});
}

export default Component;

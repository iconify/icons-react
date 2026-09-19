import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy0o8cbxt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy0o8cbxt"/>`,
		"fallback": "fa7-solid:w",
	});
}

export default Component;

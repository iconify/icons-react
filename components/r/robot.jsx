import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0mcdubxf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0mcdubxf"/>`,
		"fallback": "fa-solid:robot",
	});
}

export default Component;

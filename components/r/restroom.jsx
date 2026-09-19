import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddoxlnb7c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddoxlnb7c"/>`,
		"fallback": "fa7-solid:restroom",
	});
}

export default Component;

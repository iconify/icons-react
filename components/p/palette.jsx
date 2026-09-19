import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duv8mepcf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duv8mepcf"/>`,
		"fallback": "fa7-solid:palette",
	});
}

export default Component;

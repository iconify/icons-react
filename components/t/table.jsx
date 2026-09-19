import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfho90yej.css';

const viewBox = {"width":1664,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfho90yej"/>`,
		"fallback": "vs:table",
	});
}

export default Component;

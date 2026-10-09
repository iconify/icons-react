import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwy3jw9qh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwy3jw9qh"/>`,
		"fallback": "energy-icons:sun-dim-20-bold",
	});
}

export default Component;

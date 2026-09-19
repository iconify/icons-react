import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3kqflice.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3kqflice"/>`,
		"fallback": "dashicons:products",
	});
}

export default Component;

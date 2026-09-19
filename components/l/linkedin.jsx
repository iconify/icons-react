import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puwg798lz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puwg798lz"/>`,
		"fallback": "dashicons:linkedin",
	});
}

export default Component;

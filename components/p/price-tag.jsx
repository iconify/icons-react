import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oih079b9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oih079b9u"/>`,
		"fallback": "icons8:price-tag",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opxh7ab4o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opxh7ab4o"/>`,
		"fallback": "carbon:value-variable",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d95x-xrjv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d95x-xrjv"/>`,
		"fallback": "la:not-equal",
	});
}

export default Component;

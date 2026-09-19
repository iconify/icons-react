import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht65-g-1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht65-g-1c"/>`,
		"fallback": "cib:next-js",
	});
}

export default Component;

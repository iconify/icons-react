import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-84n2b3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-84n2b3e"/>`,
		"fallback": "raphael:notebook",
	});
}

export default Component;

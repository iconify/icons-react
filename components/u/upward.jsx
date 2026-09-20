import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1i9edblx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1i9edblx"/>`,
		"fallback": "picon:upward",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjgfdy2ye.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjgfdy2ye"/>`,
		"fallback": "picon:vr",
	});
}

export default Component;

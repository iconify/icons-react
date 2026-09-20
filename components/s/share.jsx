import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckpei60ih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckpei60ih"/>`,
		"fallback": "uiw:share",
	});
}

export default Component;

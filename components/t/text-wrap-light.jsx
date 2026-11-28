import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztrv4pb-y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztrv4pb-y"/>`,
		"fallback": "pullo:text-wrap-light",
	});
}

export default Component;

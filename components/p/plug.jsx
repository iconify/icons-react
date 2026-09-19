import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdr3yo2xl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdr3yo2xl"/>`,
		"fallback": "carbon:plug",
	});
}

export default Component;

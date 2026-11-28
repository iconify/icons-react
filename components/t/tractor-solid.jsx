import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrbv4zbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrbv4zbrk"/>`,
		"fallback": "iconaut:tractor-solid",
	});
}

export default Component;

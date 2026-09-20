import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh5f3c7jr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh5f3c7jr"/>`,
		"fallback": "iwwa:percentage",
	});
}

export default Component;

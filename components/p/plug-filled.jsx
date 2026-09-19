import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co8z4ybbz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co8z4ybbz"/>`,
		"fallback": "carbon:plug-filled",
	});
}

export default Component;

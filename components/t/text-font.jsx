import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj55e6wen.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj55e6wen"/>`,
		"fallback": "carbon:text-font",
	});
}

export default Component;

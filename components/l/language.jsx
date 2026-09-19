import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf8q1q14h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf8q1q14h"/>`,
		"fallback": "carbon:language",
	});
}

export default Component;

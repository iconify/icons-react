import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7vn6ac5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7vn6ac5s"/>`,
		"fallback": "la:signal-solid",
	});
}

export default Component;

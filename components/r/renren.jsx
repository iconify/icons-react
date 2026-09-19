import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu-vy3n-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu-vy3n-z"/>`,
		"fallback": "cib:renren",
	});
}

export default Component;

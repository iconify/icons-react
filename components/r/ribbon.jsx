import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe91o3b1q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe91o3b1q"/>`,
		"fallback": "fa7-solid:ribbon",
	});
}

export default Component;

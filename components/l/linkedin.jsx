import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysdn1wbez.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysdn1wbez"/>`,
		"fallback": "icomoon-free:linkedin",
	});
}

export default Component;

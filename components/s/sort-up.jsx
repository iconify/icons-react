import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7f5jf0ps.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7f5jf0ps"/>`,
		"fallback": "fa6-solid:sort-up",
	});
}

export default Component;

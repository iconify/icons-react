import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/n/ntqy4bbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jvtjbnueh"/><path class="ntqy4bbdv"/></g>`,
		"fallback": "hugeicons:summation-square",
	});
}

export default Component;

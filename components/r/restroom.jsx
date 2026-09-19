import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnyx5vbit.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnyx5vbit"/>`,
		"fallback": "fa6-solid:restroom",
	});
}

export default Component;

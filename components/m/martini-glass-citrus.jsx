import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvovxp9kx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvovxp9kx"/>`,
		"fallback": "fa7-solid:martini-glass-citrus",
	});
}

export default Component;

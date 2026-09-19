import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehc-x0dxe.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehc-x0dxe"/>`,
		"fallback": "fa6-solid:laptop-file",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_gdm1jiq.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_gdm1jiq"/>`,
		"fallback": "fa6-solid:s",
	});
}

export default Component;

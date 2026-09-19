import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-sd1yvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-sd1yvj"/>`,
		"fallback": "famicons:shield-outline",
	});
}

export default Component;

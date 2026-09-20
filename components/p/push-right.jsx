import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux__kacnj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux__kacnj"/>`,
		"fallback": "system-uicons:push-right",
	});
}

export default Component;

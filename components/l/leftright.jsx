import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r97h_xb2b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r97h_xb2b"/>`,
		"fallback": "dashicons:leftright",
	});
}

export default Component;

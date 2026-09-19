import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esuc5dp6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esuc5dp6h"/>`,
		"fallback": "boxicons:translate",
	});
}

export default Component;

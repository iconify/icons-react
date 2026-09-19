import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf1ugp_oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf1ugp_oi"/>`,
		"fallback": "hugeicons:mayan-pyramid",
	});
}

export default Component;

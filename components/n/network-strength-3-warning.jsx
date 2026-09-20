import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/add9_ablq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="add9_ablq"/>`,
		"fallback": "mdi:network-strength-3-warning",
	});
}

export default Component;

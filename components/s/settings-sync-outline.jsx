import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kra9o8bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kra9o8bzf"/>`,
		"fallback": "mdi:settings-sync-outline",
	});
}

export default Component;

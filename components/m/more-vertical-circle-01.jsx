import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl_82zymi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl_82zymi"/>`,
		"fallback": "hugeicons:more-vertical-circle-01",
	});
}

export default Component;

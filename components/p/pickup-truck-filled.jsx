import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utcr3yxbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utcr3yxbe"/>`,
		"fallback": "boxicons:pickup-truck-filled",
	});
}

export default Component;

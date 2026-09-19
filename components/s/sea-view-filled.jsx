import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/escisac_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="escisac_u"/>`,
		"fallback": "boxicons:sea-view-filled",
	});
}

export default Component;

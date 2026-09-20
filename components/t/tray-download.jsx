import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccrrbfbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccrrbfbcu"/>`,
		"fallback": "mdi:tray-download",
	});
}

export default Component;

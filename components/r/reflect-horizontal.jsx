import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emed2bbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emed2bbtx"/>`,
		"fallback": "mdi:reflect-horizontal",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yawa8zbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yawa8zbxl"/>`,
		"fallback": "mdi:package-variant-closed-add",
	});
}

export default Component;

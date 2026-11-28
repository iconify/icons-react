import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjh8g_qnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjh8g_qnm"/>`,
		"fallback": "noviair-light:layers-plus",
	});
}

export default Component;

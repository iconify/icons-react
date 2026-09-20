import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylyopj0xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylyopj0xj"/>`,
		"fallback": "ri:menu-unfold-4-line",
	});
}

export default Component;

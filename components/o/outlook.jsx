import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7xjn6gpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7xjn6gpb"/>`,
		"fallback": "mdi:outlook",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7p6xjb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7p6xjb4k"/>`,
		"fallback": "mdi:sign-text",
	});
}

export default Component;

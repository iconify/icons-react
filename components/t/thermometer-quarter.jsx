import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0g8n9bgj.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0g8n9bgj"/>`,
		"fallback": "fa-solid:thermometer-quarter",
	});
}

export default Component;

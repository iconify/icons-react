import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w10fp8n8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w10fp8n8w"/>`,
		"fallback": "thesvg-color:jsfiddle",
	});
}

export default Component;

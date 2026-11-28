import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aksmz6bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aksmz6bai"/>`,
		"fallback": "noviair-light:network-lock",
	});
}

export default Component;

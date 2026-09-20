import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi84fdbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi84fdbrb"/>`,
		"fallback": "lucide:logs",
	});
}

export default Component;

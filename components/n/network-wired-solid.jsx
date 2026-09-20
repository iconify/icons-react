import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiwx7ab7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiwx7ab7q"/>`,
		"fallback": "la:network-wired-solid",
	});
}

export default Component;

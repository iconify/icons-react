import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huaop5l8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huaop5l8m"/>`,
		"fallback": "la:soundcloud",
	});
}

export default Component;

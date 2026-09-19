import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_-n7mbal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_-n7mbal"/>`,
		"fallback": "fa6-solid:spinner",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkk06ubis.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkk06ubis"/>`,
		"fallback": "cib:mozilla",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0wm6vbyk.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0wm6vbyk"/>`,
		"fallback": "fa-solid:map-marker",
	});
}

export default Component;

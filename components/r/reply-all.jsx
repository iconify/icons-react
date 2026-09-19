import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu88yodte.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu88yodte"/>`,
		"fallback": "fa-solid:reply-all",
	});
}

export default Component;

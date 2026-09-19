import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb34d8b-y.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb34d8b-y"/>`,
		"fallback": "fa-solid:long-arrow-alt-down",
	});
}

export default Component;

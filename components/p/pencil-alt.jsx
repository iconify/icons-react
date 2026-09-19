import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylte6_80y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylte6_80y"/>`,
		"fallback": "fa-solid:pencil-alt",
	});
}

export default Component;

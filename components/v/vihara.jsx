import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq8bzlb8n.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq8bzlb8n"/>`,
		"fallback": "fa-solid:vihara",
	});
}

export default Component;

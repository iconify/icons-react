import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctpz6c3qy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctpz6c3qy"/>`,
		"fallback": "fa6-solid:pencil",
	});
}

export default Component;

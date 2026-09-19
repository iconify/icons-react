import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxc3k3jzd.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxc3k3jzd"/>`,
		"fallback": "fa6-solid:place-of-worship",
	});
}

export default Component;

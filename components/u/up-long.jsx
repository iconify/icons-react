import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku7se3bbd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku7se3bbd"/>`,
		"fallback": "fa7-solid:up-long",
	});
}

export default Component;

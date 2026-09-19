import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywntjv63r.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywntjv63r"/>`,
		"fallback": "fa6-solid:mountain-city",
	});
}

export default Component;

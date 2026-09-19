import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8ug4ybrq.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8ug4ybrq"/>`,
		"fallback": "fa6-solid:up-long",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hitnyjdkn.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hitnyjdkn"/>`,
		"fallback": "fa6-solid:up-down",
	});
}

export default Component;

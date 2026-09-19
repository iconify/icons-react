import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uio5m4bmb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uio5m4bmb"/>`,
		"fallback": "fa7-solid:th",
	});
}

export default Component;

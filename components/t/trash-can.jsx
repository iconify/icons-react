import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ary9esnqb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ary9esnqb"/>`,
		"fallback": "fa6-solid:trash-can",
	});
}

export default Component;

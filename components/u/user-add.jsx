import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onhc3xo-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onhc3xo-x"/>`,
		"fallback": "zondicons:user-add",
	});
}

export default Component;

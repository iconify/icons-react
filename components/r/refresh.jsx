import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4d0xccxr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4d0xccxr"/>`,
		"fallback": "zondicons:refresh",
	});
}

export default Component;

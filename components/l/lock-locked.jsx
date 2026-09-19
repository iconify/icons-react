import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knur75qgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knur75qgr"/>`,
		"fallback": "cil:lock-locked",
	});
}

export default Component;

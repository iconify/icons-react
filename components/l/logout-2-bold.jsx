import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvymvrbay.css';
import '../../css/y/yu315fbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvymvrbay"/><path class="yu315fbxr"/>`,
		"fallback": "solar:logout-2-bold",
	});
}

export default Component;

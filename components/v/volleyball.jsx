import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv5jlwbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv5jlwbxr"/>`,
		"fallback": "boxicons:volleyball",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypt_fdc4d.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypt_fdc4d"/>`,
		"fallback": "lineicons:sun",
	});
}

export default Component;

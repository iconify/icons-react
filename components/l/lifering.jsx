import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk-neybtd.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk-neybtd"/>`,
		"fallback": "lineicons:lifering",
	});
}

export default Component;

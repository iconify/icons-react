import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk6pe--vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk6pe--vp"/>`,
		"fallback": "withicons:panel-right",
	});
}

export default Component;

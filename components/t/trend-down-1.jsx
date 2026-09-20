import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0k-myezj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0k-myezj"/>`,
		"fallback": "lineicons:trend-down-1",
	});
}

export default Component;

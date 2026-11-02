import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq_-j4dud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq_-j4dud"/>`,
		"fallback": "mingcute:layout-top-fill",
	});
}

export default Component;

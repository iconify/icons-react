import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5chi8b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5chi8b9v"/>`,
		"fallback": "mingcute:vector-bezier-3-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihk2tf_ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihk2tf_ys"/>`,
		"fallback": "mingcute:iteration-ccw-fill",
	});
}

export default Component;

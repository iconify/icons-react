import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk8j7_b_e.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk8j7_b_e"/>`,
		"fallback": "lineicons:vector",
	});
}

export default Component;

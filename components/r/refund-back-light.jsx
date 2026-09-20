import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bryx4egmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bryx4egmj"/>`,
		"fallback": "lets-icons:refund-back-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9o5c_wqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9o5c_wqc"/>`,
		"fallback": "mingcute:mirror-fill",
	});
}

export default Component;

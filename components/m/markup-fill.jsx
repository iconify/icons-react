import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg3wgt3ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg3wgt3ac"/>`,
		"fallback": "mingcute:markup-fill",
	});
}

export default Component;

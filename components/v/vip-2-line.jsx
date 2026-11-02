import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnvyml-_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnvyml-_i"/>`,
		"fallback": "mingcute:vip-2-line",
	});
}

export default Component;

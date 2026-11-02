import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt3fd0bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt3fd0bno"/>`,
		"fallback": "mingcute:vip-2-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywvr6nbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywvr6nbcb"/>`,
		"fallback": "mingcute:wash-machine-fill",
	});
}

export default Component;

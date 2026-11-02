import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qge1n9b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qge1n9b9i"/>`,
		"fallback": "mingcute:sunrise-fill",
	});
}

export default Component;

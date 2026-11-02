import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjlc6qbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjlc6qbxc"/>`,
		"fallback": "mingcute:minus-circle-dash-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmq9d11ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmq9d11ge"/>`,
		"fallback": "mingcute:restore-line",
	});
}

export default Component;

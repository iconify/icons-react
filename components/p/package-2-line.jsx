import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyw8m8bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyw8m8bhx"/>`,
		"fallback": "mingcute:package-2-line",
	});
}

export default Component;

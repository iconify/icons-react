import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbjvtxb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbjvtxb1p"/>`,
		"fallback": "mingcute:transfer-fill",
	});
}

export default Component;

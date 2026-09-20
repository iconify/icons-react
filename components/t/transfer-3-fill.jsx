import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh09i1btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh09i1btx"/>`,
		"fallback": "mingcute:transfer-3-fill",
	});
}

export default Component;

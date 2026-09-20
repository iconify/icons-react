import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgd-5o5ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgd-5o5ub"/>`,
		"fallback": "mingcute:jeep-fill",
	});
}

export default Component;

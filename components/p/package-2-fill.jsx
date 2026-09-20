import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2psh36mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2psh36mv"/>`,
		"fallback": "mingcute:package-2-fill",
	});
}

export default Component;

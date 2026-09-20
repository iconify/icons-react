import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px9-5bcch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px9-5bcch"/>`,
		"fallback": "mingcute:line-height-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wig5fjbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wig5fjbcl"/>`,
		"fallback": "mingcute:logs-fill",
	});
}

export default Component;

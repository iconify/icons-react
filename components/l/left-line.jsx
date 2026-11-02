import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfus-81oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfus-81oh"/>`,
		"fallback": "mingcute:left-line",
	});
}

export default Component;

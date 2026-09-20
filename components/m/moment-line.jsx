import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbm6ne5it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbm6ne5it"/>`,
		"fallback": "mingcute:moment-line",
	});
}

export default Component;

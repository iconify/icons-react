import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlc3l98h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlc3l98h"/>`,
		"fallback": "circum:lollipop",
	});
}

export default Component;

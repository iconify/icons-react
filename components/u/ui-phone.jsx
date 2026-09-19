import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxk8cxb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxk8cxb6q"/>`,
		"fallback": "guidance:ui-phone",
	});
}

export default Component;

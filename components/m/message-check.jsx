import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvcg5__wh.css';
import '../../css/z/z8-dohb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvcg5__wh"/><path class="z8-dohb5r"/>`,
		"fallback": "bx:message-check",
	});
}

export default Component;

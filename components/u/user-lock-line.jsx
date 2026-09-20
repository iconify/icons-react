import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haxv7wbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haxv7wbjn"/>`,
		"fallback": "mingcute:user-lock-line",
	});
}

export default Component;

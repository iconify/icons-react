import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqu95vijs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqu95vijs"/>`,
		"fallback": "cbi:sliding-window-door-close",
	});
}

export default Component;

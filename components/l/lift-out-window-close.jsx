import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy6m6hb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy6m6hb8z"/>`,
		"fallback": "cbi:lift-out-window-close",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh62sw2tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh62sw2tz"/>`,
		"fallback": "uim:previous",
	});
}

export default Component;

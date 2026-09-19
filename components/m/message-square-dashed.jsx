import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcmoi-m3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcmoi-m3x"/>`,
		"fallback": "hugeicons:message-square-dashed",
	});
}

export default Component;

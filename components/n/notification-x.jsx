import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qag146y1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qag146y1r"/>`,
		"fallback": "noviair:notification-x",
	});
}

export default Component;

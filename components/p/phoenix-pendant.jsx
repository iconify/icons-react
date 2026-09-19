import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob12t-xdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob12t-xdm"/>`,
		"fallback": "cbi:phoenix-pendant",
	});
}

export default Component;

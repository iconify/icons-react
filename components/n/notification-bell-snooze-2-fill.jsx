import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti26dd_bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti26dd_bv"/>`,
		"fallback": "mage:notification-bell-snooze-2-fill",
	});
}

export default Component;

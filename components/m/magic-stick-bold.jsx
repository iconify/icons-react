import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxk_x0b5m.css';
import '../../css/i/i5wfaac8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxk_x0b5m"/><path class="i5wfaac8u"/>`,
		"fallback": "solar:magic-stick-bold",
	});
}

export default Component;

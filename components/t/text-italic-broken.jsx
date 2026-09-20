import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq5ja2bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq5ja2bbm"/>`,
		"fallback": "solar:text-italic-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anupi1uga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anupi1uga"/>`,
		"fallback": "solar:shield-minimalistic-broken",
	});
}

export default Component;

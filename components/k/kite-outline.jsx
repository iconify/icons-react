import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmjtr9fwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmjtr9fwl"/>`,
		"fallback": "mdi:kite-outline",
	});
}

export default Component;

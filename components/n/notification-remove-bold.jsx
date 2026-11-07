import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr2f8pbje.css';
import '../../css/x/xjq0yvb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lr2f8pbje"/><path class="xjq0yvb5e"/>`,
		"fallback": "solar:notification-remove-bold",
	});
}

export default Component;

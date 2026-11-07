import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr2f8pbje.css';
import '../../css/c/ch9w-bbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lr2f8pbje"/><path class="ch9w-bbsi"/>`,
		"fallback": "solar:notification-remove-bold-duotone",
	});
}

export default Component;

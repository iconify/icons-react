import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu5nzuxyh.css';
import '../../css/o/omzbjkw4i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu5nzuxyh"/><path class="omzbjkw4i"/>`,
		"fallback": "carbon:vpn-policy",
	});
}

export default Component;

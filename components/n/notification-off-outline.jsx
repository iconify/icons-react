import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcq1b5bna.css';
import '../../css/t/t5mpfkbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcq1b5bna"/><path clip-rule="evenodd" class="t5mpfkbee"/>`,
		"fallback": "basil:notification-off-outline",
	});
}

export default Component;

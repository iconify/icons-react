import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vheb2-beq.css';
import '../../css/u/ubakjmb1l.css';
import '../../css/k/kjfotn-5m.css';
import '../../css/t/t0ktzn_8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vheb2-beq"/><path clip-rule="evenodd" class="ubakjmb1l"/><path class="kjfotn-5m"/><path class="t0ktzn_8u"/>`,
		"fallback": "solar:notification-unread-lines-outline",
	});
}

export default Component;

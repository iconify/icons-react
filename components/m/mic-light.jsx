import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sb6pk9_pi.css';
import '../../css/q/q1dfbdcks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="sb6pk9_pi"/><path class="q1dfbdcks"/></g>`,
		"fallback": "lets-icons:mic-light",
	});
}

export default Component;

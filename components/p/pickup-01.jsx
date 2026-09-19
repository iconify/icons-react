import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ezxmecboo.css';
import '../../css/u/us-rr1b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ezxmecboo"/><path class="us-rr1b5a"/></g>`,
		"fallback": "hugeicons:pickup-01",
	});
}

export default Component;

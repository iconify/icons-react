import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ixnrqsbfw.css';
import '../../css/v/vpyj70zqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ixnrqsbfw"/><path class="vpyj70zqd"/></g>`,
		"fallback": "hugeicons:setup-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yctus2e_t.css';
import '../../css/m/m-jxe14uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yctus2e_t"/><path class="m-jxe14uh"/></g>`,
		"fallback": "andrsrxn:tie",
	});
}

export default Component;

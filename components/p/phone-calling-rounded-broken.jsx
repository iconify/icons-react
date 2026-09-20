import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bucfw6bdg.css';
import '../../css/q/qy44fxbnk.css';
import '../../css/q/qatxeebvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bucfw6bdg"/><path class="qy44fxbnk"/><path class="qatxeebvq"/></g>`,
		"fallback": "solar:phone-calling-rounded-broken",
	});
}

export default Component;

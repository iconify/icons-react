import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kuhijdwnq.css';
import '../../css/q/qxaconbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kuhijdwnq"/><path class="qxaconbsk"/></g>`,
		"fallback": "hugeicons:touch-locked-02",
	});
}

export default Component;

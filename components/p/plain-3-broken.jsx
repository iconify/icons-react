import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oe1zxsb7w.css';
import '../../css/q/qbdgd-gui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oe1zxsb7w"/><path class="qbdgd-gui"/></g>`,
		"fallback": "solar:plain-3-broken",
	});
}

export default Component;

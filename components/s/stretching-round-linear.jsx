import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvkwtxc3k.css';
import '../../css/g/g8y_iccqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="xvkwtxc3k"/><path class="g8y_iccqt"/></g>`,
		"fallback": "solar:stretching-round-linear",
	});
}

export default Component;

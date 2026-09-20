import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jzpzbjb4y.css';
import '../../css/o/oaqv2jbau.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jzpzbjb4y"/><path class="oaqv2jbau"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:upload-square-broken",
	});
}

export default Component;

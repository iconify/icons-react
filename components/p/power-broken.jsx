import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ny50c9bxo.css';
import '../../css/d/drwdmqc5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ny50c9bxo"/><path class="drwdmqc5u"/></g>`,
		"fallback": "solar:power-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ef_d7lbsg.css';
import '../../css/v/vgg7hdcdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ef_d7lbsg"/><path class="vgg7hdcdc"/></g>`,
		"fallback": "mage:shield-plus",
	});
}

export default Component;

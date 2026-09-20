import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ito6rjbzs.css';
import '../../css/v/vgg7hdcdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ito6rjbzs"/><path class="vgg7hdcdc"/></g>`,
		"fallback": "mage:shield-cross",
	});
}

export default Component;

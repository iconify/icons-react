import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9y0r4xwp.css';
import '../../css/o/ovwoiobnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p9y0r4xwp"/><path class="ovwoiobnw"/></g>`,
		"fallback": "mage:user-minus",
	});
}

export default Component;

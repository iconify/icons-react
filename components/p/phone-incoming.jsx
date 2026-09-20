import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zwn5-sbxt.css';
import '../../css/u/udh__3bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zwn5-sbxt"/><path class="udh__3bhb"/></g>`,
		"fallback": "mage:phone-incoming",
	});
}

export default Component;

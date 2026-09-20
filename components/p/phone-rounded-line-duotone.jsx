import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ibr38200s.css';
import '../../css/b/bnkg8-bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ibr38200s"/><path class="bnkg8-bza"/></g>`,
		"fallback": "solar:phone-rounded-line-duotone",
	});
}

export default Component;

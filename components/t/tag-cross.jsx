import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zfsoe_bez.css';
import '../../css/m/mn9y2kbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zfsoe_bez"/><path class="mn9y2kbuu"/></g>`,
		"fallback": "mage:tag-cross",
	});
}

export default Component;

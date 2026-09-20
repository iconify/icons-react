import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mn9y2kbuu.css';
import '../../css/a/agy6o3bme.css';
import '../../css/p/pjq09mwpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mn9y2kbuu"/><path class="agy6o3bme"/><path class="pjq09mwpy"/></g>`,
		"fallback": "mage:tag-question-mark",
	});
}

export default Component;

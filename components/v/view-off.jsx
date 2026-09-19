import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vpvz8jbux.css';
import '../../css/f/fezrilbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vpvz8jbux"/><path class="fezrilbtn"/></g>`,
		"fallback": "hugeicons:view-off",
	});
}

export default Component;

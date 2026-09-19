import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vkoha5bwg.css';
import '../../css/f/f9lsnw5aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vkoha5bwg"/><path class="f9lsnw5aw"/></g>`,
		"fallback": "hugeicons:left-to-right-list-number",
	});
}

export default Component;

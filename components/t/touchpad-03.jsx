import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bwvobnjdz.css';
import '../../css/x/x8poahbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bwvobnjdz"/><path class="x8poahbio"/></g>`,
		"fallback": "hugeicons:touchpad-03",
	});
}

export default Component;

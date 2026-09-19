import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y5r4pab5j.css';
import '../../css/z/zrd_37wkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y5r4pab5j"/><path class="zrd_37wkn"/></g>`,
		"fallback": "hugeicons:waving-hand-01",
	});
}

export default Component;

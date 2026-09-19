import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y7_pbcwpb.css';
import '../../css/d/df6p4ubbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y7_pbcwpb"/><path class="df6p4ubbs"/></g>`,
		"fallback": "hugeicons:japanese-yen",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rr-ycdbeh.css';
import '../../css/x/x6bt_1bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rr-ycdbeh"/><path class="x6bt_1bom"/></g>`,
		"fallback": "solar:star-rainbow-line-duotone",
	});
}

export default Component;

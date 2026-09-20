import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xdwrhrbdk.css';
import '../../css/i/i6fuzzm3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xdwrhrbdk"/><path class="i6fuzzm3n"/></g>`,
		"fallback": "solar:scaling-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/noff7ob6h.css';
import '../../css/r/r7oqy7b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="noff7ob6h"/><path class="r7oqy7b-t"/></g>`,
		"fallback": "solar:shield-keyhole-line-duotone",
	});
}

export default Component;

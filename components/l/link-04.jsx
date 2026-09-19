import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnbg679zg.css';
import '../../css/g/gq7v2qb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnbg679zg"/><path class="gq7v2qb7p"/></g>`,
		"fallback": "hugeicons:link-04",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y-uxy98jv.css';
import '../../css/l/l2fu2bckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y-uxy98jv"/><path class="l2fu2bckx"/></g>`,
		"fallback": "solar:table-columns-split-line-duotone",
	});
}

export default Component;

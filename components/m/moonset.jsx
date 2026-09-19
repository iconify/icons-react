import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eo8u9066p.css';
import '../../css/o/oqfv9rb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eo8u9066p"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "hugeicons:moonset",
	});
}

export default Component;

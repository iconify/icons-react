import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t52w-hbkv.css';
import '../../css/i/izwsa0kiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t52w-hbkv"/><path class="izwsa0kiq"/></g>`,
		"fallback": "solar:traffic-line-duotone",
	});
}

export default Component;

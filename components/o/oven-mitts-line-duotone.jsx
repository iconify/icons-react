import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7rjhnbgz.css';
import '../../css/z/zozlqirrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o7rjhnbgz"/><path class="zozlqirrp"/></g>`,
		"fallback": "solar:oven-mitts-line-duotone",
	});
}

export default Component;

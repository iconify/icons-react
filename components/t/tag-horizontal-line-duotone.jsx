import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yuybqykjv.css';
import '../../css/l/lf4wkjbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yuybqykjv"/><path class="lf4wkjbgk"/></g>`,
		"fallback": "solar:tag-horizontal-line-duotone",
	});
}

export default Component;

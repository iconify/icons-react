import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5pw4w6ef.css';
import '../../css/v/vcn0ywbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5pw4w6ef"/><path class="vcn0ywbrs"/></g>`,
		"fallback": "coolicons:star-duotone-round",
	});
}

export default Component;

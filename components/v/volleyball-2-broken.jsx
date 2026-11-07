import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y2kstw56z.css';
import '../../css/m/mbcrec3yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y2kstw56z"/><path class="mbcrec3yn"/></g>`,
		"fallback": "solar:volleyball-2-broken",
	});
}

export default Component;

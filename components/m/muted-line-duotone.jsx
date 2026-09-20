import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0j38ztpz.css';
import '../../css/n/n73139b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0j38ztpz"/><path class="n73139b0q"/></g>`,
		"fallback": "solar:muted-line-duotone",
	});
}

export default Component;

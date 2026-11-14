import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wb7_65b-g.css';
import '../../css/v/vkdts-b4s.css';
import '../../css/l/lzvosfbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wb7_65b-g"/><path class="vkdts-b4s"/><path class="lzvosfbku"/></g>`,
		"fallback": "hugeicons:setting-done-04",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jo_r_0bvz.css';
import '../../css/x/xezfabb3u.css';
import '../../css/b/b0787_b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jo_r_0bvz"/><path class="xezfabb3u"/><path class="b0787_b7z"/></g>`,
		"fallback": "solar:key-minimalistic-square-2-line-duotone",
	});
}

export default Component;

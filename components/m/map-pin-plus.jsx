import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t-7cynltd.css';
import '../../css/i/i9kmap_so.css';
import '../../css/h/h05zebbih.css';
import '../../css/f/flr9t1ipy.css';
import '../../css/s/s8ns_2bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="t-7cynltd wm-shadow"/><path class="i9kmap_so wm-shadow"/><path class="h05zebbih"/><path class="flr9t1ipy"/><path class="s8ns_2bvx wm-s"/></g>`,
		"fallback": "withicons-brutal:map-pin-plus",
	});
}

export default Component;

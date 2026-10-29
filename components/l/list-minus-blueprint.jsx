import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xr14t48pc.css';
import '../../css/w/wmx-00bdf.css';
import '../../css/n/n2_r2ubps.css';
import '../../css/o/okp7pp4nk.css';
import '../../css/s/sxwvjhaxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xr14t48pc"/><path class="wm-deco wmx-00bdf"/><path class="n2_r2ubps wm-k"/><path class="okp7pp4nk wm-s"/><path class="sxwvjhaxj wm-k"/></g>`,
		"fallback": "withicons:list-minus-blueprint",
	});
}

export default Component;

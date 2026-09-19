import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uw9x_cbei.css';
import '../../css/d/do02-k5_c.css';
import '../../css/i/i5adlfbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uw9x_cbei"/><path class="do02-k5_c"/><path class="i5adlfbfb"/></g>`,
		"fallback": "hugeicons:plug-02",
	});
}

export default Component;

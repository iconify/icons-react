import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxggonbsq.css';
import '../../css/s/sgl_ij8de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rxggonbsq"/><path class="sgl_ij8de"/></g>`,
		"fallback": "hugeicons:ungroup-items",
	});
}

export default Component;

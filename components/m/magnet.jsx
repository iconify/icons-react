import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hg33t-y6h.css';
import '../../css/w/w1qjm_bxc.css';
import '../../css/x/xxyrx4b1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hg33t-y6h"/><path class="w1qjm_bxc"/><path class="xxyrx4b1q"/></g>`,
		"fallback": "icon-park:magnet",
	});
}

export default Component;

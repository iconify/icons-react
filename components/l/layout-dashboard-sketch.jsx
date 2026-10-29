import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lt4t6s5au.css';
import '../../css/h/hk4-sab2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lt4t6s5au"/><path class="hk4-sab2w"/></g>`,
		"fallback": "withicons:layout-dashboard-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_tn6fb3u.css';
import '../../css/y/y73-0yb2m.css';
import '../../css/x/xxezozbbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_tn6fb3u"/><path clip-rule="evenodd" class="y73-0yb2m"/><path class="xxezozbbw"/></g>`,
		"fallback": "healthicons:integrated-data-and-research",
	});
}

export default Component;

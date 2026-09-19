import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emwy90b2g.css';
import '../../css/t/t3u1btvev.css';
import '../../css/z/z9uv1wxrm.css';
import '../../css/k/k8-zw4g9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emwy90b2g"/><rect class="t3u1btvev"/><rect class="z9uv1wxrm"/><path class="k8-zw4g9g"/></g>`,
		"fallback": "icon-park-outline:switch-nintendo",
	});
}

export default Component;

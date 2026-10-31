import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/s/sf3f2gb3t.css';
import '../../css/x/xrj_chmxz.css';
import '../../css/p/p9vxbdb1s.css';
import '../../css/u/u712--bhn.css';
import '../../css/c/c9ru3mb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="sf3f2gb3t"/><path class="xrj_chmxz"/><path class="p9vxbdb1s"/><path class="u712--bhn"/><path class="c9ru3mb3w"/></g>`,
		"fallback": "withicons-retro:message-circle",
	});
}

export default Component;

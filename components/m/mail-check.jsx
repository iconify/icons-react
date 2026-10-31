import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b_hqo2b9f.css';
import '../../css/b/bcclgjbwf.css';
import '../../css/i/it95ezhzb.css';
import '../../css/j/j8sph-c2k.css';
import '../../css/g/gu44acclc.css';
import '../../css/i/i8rtp9bso.css';
import '../../css/k/ka-0gpyza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b_hqo2b9f wm-shadow"/><path class="bcclgjbwf"/><path class="it95ezhzb"/><path class="j8sph-c2k"/><path class="gu44acclc"/><path class="i8rtp9bso"/><path class="ka-0gpyza wm-s"/></g>`,
		"fallback": "withicons-retro:mail-check",
	});
}

export default Component;

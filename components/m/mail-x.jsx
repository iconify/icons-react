import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zimg7hbbm.css';
import '../../css/b/bcclgjbwf.css';
import '../../css/i/it95ezhzb.css';
import '../../css/j/j8sph-c2k.css';
import '../../css/g/gu44acclc.css';
import '../../css/i/i8rtp9bso.css';
import '../../css/a/aggidgbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zimg7hbbm"/><path class="bcclgjbwf"/><path class="it95ezhzb"/><path class="j8sph-c2k"/><path class="gu44acclc"/><path class="i8rtp9bso"/><path class="aggidgbug wm-s"/></g>`,
		"fallback": "withicons-retro:mail-x",
	});
}

export default Component;

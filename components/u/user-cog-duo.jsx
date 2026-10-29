import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/w/wjcm_kp5a.css';
import '../../css/e/ekmlpmtjg.css';
import '../../css/l/ljeitrr-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="wjcm_kp5a wm-s"/><path class="ekmlpmtjg wm-s"/><path class="ljeitrr-k"/></g>`,
		"fallback": "withicons:user-cog-duo",
	});
}

export default Component;

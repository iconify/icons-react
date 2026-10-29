import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rnoglt5ys.css';
import '../../css/m/m7luntift.css';
import '../../css/j/jd9ceobpf.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rnoglt5ys"/><path class="m7luntift wm-s"/><path class="jd9ceobpf wm-s"/><path class="wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/></g>`,
		"fallback": "withicons:mail-search-duo",
	});
}

export default Component;

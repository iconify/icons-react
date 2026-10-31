import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/apqfo6bzv.css';
import '../../css/e/eymfqbctc.css';
import '../../css/h/hxzvzcc4m.css';
import '../../css/k/kvweaqx-f.css';
import '../../css/u/u9852abpr.css';
import '../../css/k/k8m463bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="apqfo6bzv wm-shadow"/><path class="eymfqbctc"/><path class="hxzvzcc4m"/><path class="kvweaqx-f"/><path class="u9852abpr"/><path class="k8m463bjp"/></g>`,
		"fallback": "withicons-retro:sandwich",
	});
}

export default Component;

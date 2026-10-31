import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fluzmrbjw.css';
import '../../css/l/lufva9jei.css';
import '../../css/p/p7z1hc8uo.css';
import '../../css/y/yndgl7v6m.css';
import '../../css/k/kk374q8vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fluzmrbjw wm-shadow"/><path class="lufva9jei"/><path class="p7z1hc8uo"/><path class="yndgl7v6m"/><path class="kk374q8vq"/></g>`,
		"fallback": "withicons-retro:navigation-2",
	});
}

export default Component;

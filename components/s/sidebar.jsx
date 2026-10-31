import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w9d86vzew.css';
import '../../css/m/m53vvj0ce.css';
import '../../css/f/fhd0kpbqw.css';
import '../../css/w/w2bv2ybgo.css';
import '../../css/d/dc4pb-bwi.css';
import '../../css/c/c2l8v8ijg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w9d86vzew wm-shadow"/><path class="m53vvj0ce"/><path class="fhd0kpbqw"/><path class="w2bv2ybgo"/><path class="dc4pb-bwi"/><path class="c2l8v8ijg"/></g>`,
		"fallback": "withicons-retro:sidebar",
	});
}

export default Component;

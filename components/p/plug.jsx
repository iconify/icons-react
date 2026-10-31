import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ay0m16bue.css';
import '../../css/f/fg5rldbes.css';
import '../../css/n/nfjdjjbjl.css';
import '../../css/e/ec53gwbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ay0m16bue wm-shadow"/><path class="fg5rldbes"/><path class="nfjdjjbjl"/><path class="ec53gwbhp"/></g>`,
		"fallback": "withicons-retro:plug",
	});
}

export default Component;

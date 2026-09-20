import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0mu8gnlh.css';
import '../../css/i/i9mwivbls.css';
import '../../css/h/hcghnfbeu.css';
import '../../css/q/q1k9b48ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k0mu8gnlh"/><path class="i9mwivbls"/><path class="hcghnfbeu"/><path class="q1k9b48ek"/></g>`,
		"fallback": "solar:mouse-circle-bold",
	});
}

export default Component;

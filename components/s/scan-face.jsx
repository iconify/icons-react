import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vwtll-b3d.css';
import '../../css/u/u_9gabbct.css';
import '../../css/k/kizlmm79b.css';
import '../../css/m/mqmorebqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vwtll-b3d wm-shadow"/><path class="u_9gabbct wm-shadow"/><path class="kizlmm79b"/><path class="mqmorebqj"/></g>`,
		"fallback": "withicons-brutal:scan-face",
	});
}

export default Component;

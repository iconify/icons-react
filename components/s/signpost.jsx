import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d-pgtlbgj.css';
import '../../css/v/vspil-doj.css';
import '../../css/s/som12ybho.css';
import '../../css/v/v53h7w87j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d-pgtlbgj wm-shadow"/><path class="vspil-doj"/><path class="som12ybho"/><path class="v53h7w87j"/></g>`,
		"fallback": "withicons-retro:signpost",
	});
}

export default Component;

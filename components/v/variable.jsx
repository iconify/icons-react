import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/al6oogb_n.css';
import '../../css/n/nd4hl2bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="al6oogb_n"/><path class="nd4hl2bah"/></g>`,
		"fallback": "withicons-retro:variable",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bc-ok38-p.css';
import '../../css/c/c_djembvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bc-ok38-p"/><path class="c_djembvk"/></g>`,
		"fallback": "withicons-retro:scan",
	});
}

export default Component;

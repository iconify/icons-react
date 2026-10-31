import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r-hnfg0zz.css';
import '../../css/h/hicb7bbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r-hnfg0zz"/><path class="hicb7bbjl"/></g>`,
		"fallback": "withicons-retro:type",
	});
}

export default Component;

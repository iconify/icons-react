import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/suef0m3kc.css';
import '../../css/t/ty8_j0btk.css';
import '../../css/z/z9whw7ayo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="suef0m3kc wm-k"/><path class="ty8_j0btk wm-s"/><path class="z9whw7ayo"/></g>`,
		"fallback": "withicons-bauhaus:sparkler",
	});
}

export default Component;

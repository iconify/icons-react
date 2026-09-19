import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bq03s0b6a.css';
import '../../css/e/eu8jmfbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bq03s0b6a"/><path clip-rule="evenodd" class="eu8jmfbcs"/></g>`,
		"fallback": "healthicons:question-triangle-outline-24px",
	});
}

export default Component;

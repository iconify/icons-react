import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5qpcccja.css';
import '../../css/s/s2j5wmb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5qpcccja"/><path clip-rule="evenodd" class="s2j5wmb-c"/></g>`,
		"fallback": "solar:panel-left-open-outline",
	});
}

export default Component;

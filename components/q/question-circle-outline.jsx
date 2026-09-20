import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4k5dgufd.css';
import '../../css/x/xb83v6b4n.css';
import '../../css/y/ym17mvbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i4k5dgufd"/><path class="xb83v6b4n"/><path clip-rule="evenodd" class="ym17mvbku"/></g>`,
		"fallback": "solar:question-circle-outline",
	});
}

export default Component;

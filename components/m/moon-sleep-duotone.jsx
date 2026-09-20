import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2ena9ygi.css';
import '../../css/w/wns5-ccua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e2ena9ygi"/><path class="wns5-ccua"/></g>`,
		"fallback": "reicon:moon-sleep-duotone",
	});
}

export default Component;

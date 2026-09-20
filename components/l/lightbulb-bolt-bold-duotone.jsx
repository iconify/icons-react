import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgwtpp27u.css';
import '../../css/v/v26h66bss.css';
import '../../css/i/i5bmjjazl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zgwtpp27u"/><path class="v26h66bss"/><path class="i5bmjjazl"/></g>`,
		"fallback": "solar:lightbulb-bolt-bold-duotone",
	});
}

export default Component;

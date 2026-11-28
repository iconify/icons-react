import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivfbw4b5d.css';
import '../../css/q/qfj7nsbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivfbw4b5d secondary"/><path class="primary qfj7nsbtg"/></g>`,
		"fallback": "iconaut:skateboard-duotone",
	});
}

export default Component;

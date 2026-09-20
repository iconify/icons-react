import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rx3ycfb7y.css';
import '../../css/t/ti0x26bhq.css';
import '../../css/a/awgy5qdix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rx3ycfb7y"/><path clip-rule="evenodd" class="ti0x26bhq"/><path class="awgy5qdix"/></g>`,
		"fallback": "solar:stretching-round-bold-duotone",
	});
}

export default Component;

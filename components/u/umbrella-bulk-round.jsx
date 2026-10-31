import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/no7jx77av.css';
import '../../css/o/oomagtyxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="no7jx77av"/><path class="oomagtyxe"/></g>`,
		"fallback": "coolicons:umbrella-bulk-round",
	});
}

export default Component;

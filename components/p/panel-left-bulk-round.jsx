import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwe_218us.css';
import '../../css/r/rgnjs8brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bwe_218us"/><path class="rgnjs8brm"/></g>`,
		"fallback": "coolicons:panel-left-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5o0dfb5i.css';
import '../../css/i/ixg68j6we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m5o0dfb5i"/><path class="ixg68j6we"/></g>`,
		"fallback": "coolicons:star-half-bulk-round",
	});
}

export default Component;

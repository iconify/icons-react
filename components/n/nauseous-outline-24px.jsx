import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1ysqtbqm.css';
import '../../css/t/tbvtb7bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1ysqtbqm"/><path clip-rule="evenodd" class="tbvtb7bkt"/></g>`,
		"fallback": "healthicons:nauseous-outline-24px",
	});
}

export default Component;

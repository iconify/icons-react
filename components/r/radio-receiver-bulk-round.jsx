import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/av2t1p2fx.css';
import '../../css/u/u4z6b_b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="av2t1p2fx"/><path class="u4z6b_b8h"/></g>`,
		"fallback": "coolicons:radio-receiver-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6pzvpfzc.css';
import '../../css/q/qew0i-v2x.css';
import '../../css/r/r5dklebic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6pzvpfzc"/><path clip-rule="evenodd" class="qew0i-v2x"/><path class="r5dklebic"/></g>`,
		"fallback": "solar:meditation-round-bold-duotone",
	});
}

export default Component;

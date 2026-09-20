import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6pzvpfzc.css';
import '../../css/o/ozfj0mm9h.css';
import '../../css/c/cy5y3eb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6pzvpfzc"/><path clip-rule="evenodd" class="ozfj0mm9h"/><path class="cy5y3eb7q"/></g>`,
		"fallback": "solar:meditation-bold-duotone",
	});
}

export default Component;

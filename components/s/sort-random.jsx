import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yepg14bed.css';
import '../../css/p/p9j0ecbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yepg14bed"/><path clip-rule="evenodd" class="p9j0ecbjl"/></g>`,
		"fallback": "lets-icons:sort-random",
	});
}

export default Component;

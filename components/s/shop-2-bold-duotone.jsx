import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u5fx65wua.css';
import '../../css/a/afkb6ib-h.css';
import '../../css/o/o7fvcgjso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u5fx65wua"/><path class="afkb6ib-h"/><path clip-rule="evenodd" class="o7fvcgjso"/></g>`,
		"fallback": "solar:shop-2-bold-duotone",
	});
}

export default Component;

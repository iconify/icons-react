import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7sboxbpt.css';
import '../../css/k/kiwcdbb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k7sboxbpt"/><path class="kiwcdbb2q"/></g>`,
		"fallback": "iconaut:milk-solid",
	});
}

export default Component;

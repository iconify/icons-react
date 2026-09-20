import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w30p9ms3q.css';
import '../../css/b/bxeul--al.css';
import '../../css/g/gskkfws9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w30p9ms3q"/><path class="bxeul--al"/><path class="gskkfws9g"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-outline",
	});
}

export default Component;

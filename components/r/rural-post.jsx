import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6z0y3b1u.css';
import '../../css/n/nzxkb6bsg.css';
import '../../css/g/gjraduyzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p6z0y3b1u"/><path class="nzxkb6bsg"/><path class="gjraduyzd"/></g>`,
		"fallback": "healthicons:rural-post",
	});
}

export default Component;

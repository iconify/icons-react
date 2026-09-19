import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nh6vwjb6k.css';
import '../../css/x/xjeqo6bqe.css';
import '../../css/r/rcf3djyxt.css';
import '../../css/z/zz499ob7z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="nh6vwjb6k"/><path class="xjeqo6bqe"/><path class="rcf3djyxt"/><path class="zz499ob7z"/></g>`,
		"fallback": "pepicons:reload-print",
	});
}

export default Component;

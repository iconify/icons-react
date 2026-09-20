import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwi3g62oj.css';
import '../../css/b/bqud66b7l.css';
import '../../css/v/vt0l90bec.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vwi3g62oj"/><path clip-rule="evenodd" class="bqud66b7l"/><path clip-rule="evenodd" class="vt0l90bec"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:studio-light-front-circle-off",
	});
}

export default Component;

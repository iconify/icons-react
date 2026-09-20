import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz5bueyzf.css';
import '../../css/t/tvbhop7ls.css';
import '../../css/l/l-kf-bbdg.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jz5bueyzf"/><path clip-rule="evenodd" class="tvbhop7ls"/><path clip-rule="evenodd" class="l-kf-bbdg"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:raise-hand-circle-off",
	});
}

export default Component;

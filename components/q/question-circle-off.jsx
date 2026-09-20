import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pszy_4b0t.css';
import '../../css/j/j4-krt-9e.css';
import '../../css/v/v2z71xb6c.css';
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
		"content": `<g class="cuyn6tgcc"><path class="pszy_4b0t"/><path clip-rule="evenodd" class="j4-krt-9e"/><path clip-rule="evenodd" class="v2z71xb6c"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:question-circle-off",
	});
}

export default Component;

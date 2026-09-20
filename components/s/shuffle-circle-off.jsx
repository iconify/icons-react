import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5oc7fbcj.css';
import '../../css/y/yo-3_pbpo.css';
import '../../css/c/cfxvswb1c.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x5oc7fbcj"/><path clip-rule="evenodd" class="yo-3_pbpo"/><path clip-rule="evenodd" class="cfxvswb1c"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:shuffle-circle-off",
	});
}

export default Component;

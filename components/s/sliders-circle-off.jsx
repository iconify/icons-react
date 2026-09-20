import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm-f1gbzk.css';
import '../../css/g/gdhmug4re.css';
import '../../css/u/uv07acc5c.css';
import '../../css/z/zk-nc3bmk.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lm-f1gbzk"/><path clip-rule="evenodd" class="gdhmug4re"/><path clip-rule="evenodd" class="uv07acc5c"/><path clip-rule="evenodd" class="zk-nc3bmk"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:sliders-circle-off",
	});
}

export default Component;

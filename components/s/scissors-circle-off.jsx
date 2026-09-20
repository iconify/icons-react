import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f7m35vdiv.css';
import '../../css/s/szoo33b0d.css';
import '../../css/h/hi7mdyluz.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f7m35vdiv"/><path class="szoo33b0d"/><path class="hi7mdyluz"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:scissors-circle-off",
	});
}

export default Component;

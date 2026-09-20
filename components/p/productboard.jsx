import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmmvpew-x.css';
import '../../css/z/zbkydgbar.css';

const viewBox = {"width":64,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmmvpew-x"/><path class="zbkydgbar"/></g>`,
		"fallback": "thesvg:productboard",
	});
}

export default Component;

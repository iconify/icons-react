import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyr2z0cpz.css';
import '../../css/b/bhcv8nimm.css';
import '../../css/x/xxaranb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zyr2z0cpz"/><path class="bhcv8nimm"/><path clip-rule="evenodd" class="xxaranb8j"/></g>`,
		"fallback": "reicon:router2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qf6yznbcv.css';
import '../../css/u/umffgfyvn.css';
import '../../css/b/bfrkm3b3j.css';
import '../../css/z/z4vz-wxoh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qf6yznbcv"/><path class="umffgfyvn"/><path class="bfrkm3b3j"/><path class="z4vz-wxoh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-deaf",
	});
}

export default Component;

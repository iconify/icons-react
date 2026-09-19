import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iirmqqbxz.css';
import '../../css/w/webxngbgr.css';
import '../../css/k/k_z366lpe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iirmqqbxz"/><path class="webxngbgr"/><path class="k_z366lpe"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-running",
	});
}

export default Component;

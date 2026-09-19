import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clsdao61r.css';
import '../../css/z/zc3lmmbma.css';
import '../../css/v/vbv_9ysna.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clsdao61r"><path class="zc3lmmbma"/><path class="vbv_9ysna"/></g>`,
		"fallback": "catppuccin:video",
	});
}

export default Component;

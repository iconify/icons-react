import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbcpypbby.css';
import '../../css/x/xi28nxida.css';
import '../../css/r/rnrq--cdp.css';
import '../../css/j/jx8wicb2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbcpypbby"/><path class="xi28nxida"/><path class="rnrq--cdp"/><path class="jx8wicb2x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-rowing-boat",
	});
}

export default Component;

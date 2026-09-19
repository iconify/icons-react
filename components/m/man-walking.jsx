import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdqs3zb_e.css';
import '../../css/u/uu_oto5qf.css';
import '../../css/f/ft25meb5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tdqs3zb_e"/><path class="uu_oto5qf"/><path class="ft25meb5s"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-walking",
	});
}

export default Component;

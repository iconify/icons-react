import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/reh1alp-u.css';
import '../../css/l/l_08mx4se.css';
import '../../css/i/i6ynjwb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="reh1alp-u"/><path class="l_08mx4se"/><path clip-rule="evenodd" class="i6ynjwb4h"/></g>`,
		"fallback": "solar:lightning-outline",
	});
}

export default Component;

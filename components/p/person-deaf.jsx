import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qf6yznbcv.css';
import '../../css/n/nc9n0dbna.css';
import '../../css/i/ikaa5acww.css';
import '../../css/z/z4vz-wxoh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qf6yznbcv"/><path class="nc9n0dbna"/><path class="ikaa5acww"/><path class="z4vz-wxoh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-deaf",
	});
}

export default Component;

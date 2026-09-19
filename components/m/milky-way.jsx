import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9cth8z_r.css';
import '../../css/r/rttl_qbww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a9cth8z_r"/><path class="rttl_qbww"/></g>`,
		"fallback": "fluent-emoji-high-contrast:milky-way",
	});
}

export default Component;

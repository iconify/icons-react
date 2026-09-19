import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f67gkydna.css';
import '../../css/o/ol3uvlb_q.css';
import '../../css/v/vz8svzz4r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f67gkydna"/><path class="ol3uvlb_q"/><path class="vz8svzz4r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:judge",
	});
}

export default Component;

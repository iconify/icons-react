import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pticqkbsn.css';
import '../../css/q/qyzqtj_zn.css';
import '../../css/o/o62d_4cwa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pticqkbsn"/><path class="qyzqtj_zn"/><path class="o62d_4cwa"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-with-white-cane-facing-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0qwfibsz.css';
import '../../css/v/vfcmtm7ti.css';
import '../../css/x/xtqryhbrn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0qwfibsz"/><path class="vfcmtm7ti"/><path class="xtqryhbrn"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-farmer",
	});
}

export default Component;

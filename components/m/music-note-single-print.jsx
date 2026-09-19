import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ra-b9gbrc.css';
import '../../css/x/xzibufbij.css';
import '../../css/g/g9vaapbcx.css';
import '../../css/s/s1ahl8q5g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ra-b9gbrc"/><path clip-rule="evenodd" class="xzibufbij"/><path class="g9vaapbcx"/><path clip-rule="evenodd" class="s1ahl8q5g"/></g>`,
		"fallback": "pepicons:music-note-single-print",
	});
}

export default Component;

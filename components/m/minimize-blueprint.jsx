import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rj9jvq5qh.css';
import '../../css/b/bxjv56brc.css';
import '../../css/t/trt38b28x.css';
import '../../css/n/nctgfsyvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rj9jvq5qh wm-deco"/><path class="bxjv56brc wm-deco"/><path class="trt38b28x"/><path class="nctgfsyvy"/></g>`,
		"fallback": "withicons:minimize-blueprint",
	});
}

export default Component;

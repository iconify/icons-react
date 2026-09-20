import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bom2j6ltg.css';
import '../../css/q/qzx8d-bpx.css';
import '../../css/y/ysalnkb3g.css';
import '../../css/q/qbm595m9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bom2j6ltg"/><path class="qzx8d-bpx"/><path clip-rule="evenodd" class="ysalnkb3g"/><path clip-rule="evenodd" class="qbm595m9m"/></g>`,
		"fallback": "solar:translation-2-outline",
	});
}

export default Component;

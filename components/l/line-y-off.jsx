import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-63_2t1g.css';
import '../../css/i/irilufrhk.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k-63_2t1g"/><path clip-rule="evenodd" class="irilufrhk"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:line-y-off",
	});
}

export default Component;

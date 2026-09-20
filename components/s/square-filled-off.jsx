import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkrifsaxw.css';
import '../../css/v/vwplqkwlc.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hkrifsaxw"/><path clip-rule="evenodd" class="vwplqkwlc"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:square-filled-off",
	});
}

export default Component;

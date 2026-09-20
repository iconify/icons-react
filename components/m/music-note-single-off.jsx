import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odxuk-bkc.css';
import '../../css/j/jwclepbql.css';
import '../../css/y/yh1nqihsf.css';
import '../../css/m/mxs3jyekp.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="odxuk-bkc"/><path clip-rule="evenodd" class="jwclepbql"/><path class="yh1nqihsf"/><path clip-rule="evenodd" class="mxs3jyekp"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:music-note-single-off",
	});
}

export default Component;

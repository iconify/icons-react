import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lek0p0ibc.css';
import '../../css/g/gg297mbhp.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lek0p0ibc"/><path clip-rule="evenodd" class="gg297mbhp"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:ruler-off",
	});
}

export default Component;

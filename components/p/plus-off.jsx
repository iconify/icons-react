import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2rh6zbsu.css';
import '../../css/m/m2m32f12q.css';
import '../../css/r/r9ldy4ixa.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y2rh6zbsu"/><path class="m2m32f12q"/><path class="r9ldy4ixa"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:plus-off",
	});
}

export default Component;

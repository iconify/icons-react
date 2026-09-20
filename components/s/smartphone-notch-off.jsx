import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy871zblb.css';
import '../../css/t/t-9zwsbtt.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yy871zblb"/><path clip-rule="evenodd" class="t-9zwsbtt"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:smartphone-notch-off",
	});
}

export default Component;

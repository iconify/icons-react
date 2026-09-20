import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8vf08jiq.css';
import '../../css/w/w0ni6nb2i.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i8vf08jiq"/><path clip-rule="evenodd" class="w0ni6nb2i"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:triangle-up-off",
	});
}

export default Component;

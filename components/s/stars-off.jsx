import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lajajd1gy.css';
import '../../css/z/z9tjvobkq.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lajajd1gy"/><path class="z9tjvobkq"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:stars-off",
	});
}

export default Component;

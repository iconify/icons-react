import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f3w3pwb2i.css';
import '../../css/o/oqsqdyb9y.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f3w3pwb2i"/><path class="oqsqdyb9y"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:times-off",
	});
}

export default Component;

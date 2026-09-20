import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9t3y3buj.css';
import '../../css/o/o8tzs_jpg.css';
import '../../css/b/btpxxkpmo.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h9t3y3buj"/><path clip-rule="evenodd" class="o8tzs_jpg"/><path class="btpxxkpmo"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:loop-minus-off",
	});
}

export default Component;

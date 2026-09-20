import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6y02tb2f.css';
import '../../css/f/fyvqt1pdf.css';
import '../../css/s/soh-f4tar.css';
import '../../css/o/o9q7sacyd.css';
import '../../css/r/rh8fn_wwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n6y02tb2f"/><path class="fyvqt1pdf"/><path class="soh-f4tar"/><path class="o9q7sacyd"/><path clip-rule="evenodd" class="rh8fn_wwa"/></g>`,
		"fallback": "solar:notebook-2-outline",
	});
}

export default Component;

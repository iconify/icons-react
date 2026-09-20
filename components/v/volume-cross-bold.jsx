import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8zvzvzkl.css';
import '../../css/o/oxic0dcak.css';
import '../../css/d/dagas5qlh.css';
import '../../css/g/gb7ygw3xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i8zvzvzkl"/><path clip-rule="evenodd" class="oxic0dcak"/><path class="dagas5qlh"/><path class="gb7ygw3xu"/></g>`,
		"fallback": "solar:volume-cross-bold",
	});
}

export default Component;

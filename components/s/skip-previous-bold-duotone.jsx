import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sya6ddbtm.css';
import '../../css/g/gs4tq3bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sya6ddbtm"/><path class="gs4tq3bnl"/></g>`,
		"fallback": "solar:skip-previous-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z4hzaacym.css';
import '../../css/l/lpr_75b6j.css';
import '../../css/t/t3l0et5_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z4hzaacym"/><path class="lpr_75b6j"/><path class="t3l0et5_c"/></g>`,
		"fallback": "hugeicons:mouse-15",
	});
}

export default Component;

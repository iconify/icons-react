import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oy_rq_bcd.css';
import '../../css/j/jpucv2byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oy_rq_bcd"/><path class="jpucv2byj"/></g>`,
		"fallback": "reicon:sleeping-filled",
	});
}

export default Component;

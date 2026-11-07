import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j53x1ibvg.css';
import '../../css/u/urler8hic.css';
import '../../css/o/o_5pt9b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j53x1ibvg"/><path class="urler8hic"/><path class="o_5pt9b1x"/></g>`,
		"fallback": "solar:key-square-2-line-duotone",
	});
}

export default Component;

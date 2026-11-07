import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iy-deskju.css';
import '../../css/l/l2mia0a0a.css';
import '../../css/j/jlzhyksrr.css';
import '../../css/y/yjjibyi4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iy-deskju"/><path class="l2mia0a0a"/><path class="jlzhyksrr"/><path class="yjjibyi4l"/></g>`,
		"fallback": "solar:reorder-2-line-duotone",
	});
}

export default Component;

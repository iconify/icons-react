import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnsm6lbre.css';
import '../../css/j/j63bdev3z.css';
import '../../css/l/lhf12v0wy.css';
import '../../css/h/hgiq1o_yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="mnsm6lbre"/><rect class="j63bdev3z"/><rect class="lhf12v0wy"/><rect class="hgiq1o_yl"/></g>`,
		"fallback": "andrsrxn:pause",
	});
}

export default Component;

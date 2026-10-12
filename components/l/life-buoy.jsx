import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y34sjbc0t.css';
import '../../css/m/mq_t5hpku.css';
import '../../css/n/ncbo5jbvq.css';
import '../../css/z/zbws-syos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y34sjbc0t"/><circle transform="rotate(90 11.98 12)" class="mq_t5hpku"/><circle transform="rotate(90 11.98 12)" class="ncbo5jbvq"/><path class="zbws-syos"/></g>`,
		"fallback": "andrsrxn:life-buoy",
	});
}

export default Component;

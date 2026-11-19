import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5uu04isd.css';
import '../../css/l/l7_9pbbqq.css';
import '../../css/z/zph4utb2n.css';
import '../../css/g/g0d6c2bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5uu04isd"/><path class="l7_9pbbqq"/><path class="zph4utb2n"/><path class="g0d6c2bsm"/></g>`,
		"fallback": "andrsrxn:microphone-speaking",
	});
}

export default Component;

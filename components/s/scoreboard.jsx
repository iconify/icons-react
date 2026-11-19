import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv_7q-nnn.css';
import '../../css/o/oyc_5pbzb.css';
import '../../css/o/ownynnb6c.css';
import '../../css/h/hnxhm6k0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yv_7q-nnn"/><path class="oyc_5pbzb"/><path class="ownynnb6c"/><path class="hnxhm6k0n"/></g>`,
		"fallback": "andrsrxn:scoreboard",
	});
}

export default Component;

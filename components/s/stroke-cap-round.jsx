import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nh5vr0b3s.css';
import '../../css/r/rapwtibdy.css';
import '../../css/z/zjtswjbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nh5vr0b3s"/><path class="rapwtibdy"/><path class="zjtswjbtp"/></g>`,
		"fallback": "andrsrxn:stroke-cap-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx2xnsr5l.css';
import '../../css/j/jmqo_lkda.css';
import '../../css/w/wnjxy7l2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yx2xnsr5l"/><path class="jmqo_lkda"/><path class="wnjxy7l2m"/></g>`,
		"fallback": "andrsrxn:phone-missed",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lpi14_ivq.css';
import '../../css/v/vldr-ib_b.css';
import '../../css/j/ji-2eztyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lpi14_ivq"/><path class="vldr-ib_b wm-a"/><path class="ji-2eztyl wm-s"/></g>`,
		"fallback": "withicons:jingle-bells-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x7wxr130d.css';
import '../../css/o/ow80frbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x7wxr130d"/><path class="ow80frbwm wm-a"/></g>`,
		"fallback": "withicons:trees-solid",
	});
}

export default Component;

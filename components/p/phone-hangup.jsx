import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otxjq_bxg.css';
import '../../css/n/n7wz32bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otxjq_bxg"/><path class="n7wz32bbx"/></g>`,
		"fallback": "majesticons:phone-hangup",
	});
}

export default Component;

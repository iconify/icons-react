import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqc7wbbuf.css';
import '../../css/o/oj66n_imi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qqc7wbbuf"/><path class="oj66n_imi"/></g>`,
		"fallback": "coolicons:store-duotone-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_yqr1byx.css';
import '../../css/r/rvuhee-_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_yqr1byx"/><path class="rvuhee-_i"/></g>`,
		"fallback": "coolicons:spell-check-duotone-round",
	});
}

export default Component;

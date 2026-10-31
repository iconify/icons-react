import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chal5ccye.css';
import '../../css/v/v-ql4db7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chal5ccye"/><path class="v-ql4db7v"/></g>`,
		"fallback": "coolicons:skip-back-duotone-round",
	});
}

export default Component;

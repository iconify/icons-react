import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ictsdupji.css';
import '../../css/u/ucoojrb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ictsdupji"/><path class="ucoojrb_v"/></g>`,
		"fallback": "coolicons:lock-duotone-round",
	});
}

export default Component;

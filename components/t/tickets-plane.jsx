import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpusqwbwb.css';
import '../../css/n/nagqqvblc.css';
import '../../css/n/nj4w60bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lpusqwbwb"/><path class="nagqqvblc"/><path class="nj4w60bmc"/></g>`,
		"fallback": "hugeicons:tickets-plane",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g_dr3hbhk.css';
import '../../css/h/h5_dokc-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g_dr3hbhk"/><path class="h5_dokc-z"/></g>`,
		"fallback": "hugeicons:message-secure-01",
	});
}

export default Component;

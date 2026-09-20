import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxmeaeb7o.css';
import '../../css/d/dp110obyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxmeaeb7o"/><path class="dp110obyx"/></g>`,
		"fallback": "tdesign:sailing-hotel",
	});
}

export default Component;

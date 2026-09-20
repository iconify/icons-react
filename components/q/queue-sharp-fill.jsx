import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xavs7fj5t.css';
import '../../css/q/qmk28zb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xavs7fj5t"/><path class="qmk28zb7j"/></g>`,
		"fallback": "keyline-icons:queue-sharp-fill",
	});
}

export default Component;

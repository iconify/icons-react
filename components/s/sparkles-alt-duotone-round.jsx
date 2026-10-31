import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p92e-hb_l.css';
import '../../css/j/jmzhebbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p92e-hb_l"/><path class="jmzhebbyi"/></g>`,
		"fallback": "coolicons:sparkles-alt-duotone-round",
	});
}

export default Component;

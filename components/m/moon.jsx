import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4yvp1b6j.css';
import '../../css/h/hryd7yprr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4yvp1b6j"/><path class="hryd7yprr"/></g>`,
		"fallback": "tdesign:moon",
	});
}

export default Component;

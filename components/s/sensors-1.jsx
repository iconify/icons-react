import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl_x59b9b.css';
import '../../css/i/i44ly0bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tl_x59b9b"/><path class="i44ly0bdu"/></g>`,
		"fallback": "tdesign:sensors-1",
	});
}

export default Component;

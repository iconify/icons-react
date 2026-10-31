import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/le4_hrb6o.css';
import '../../css/i/i18r14osf.css';
import '../../css/r/rrzhgezff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="le4_hrb6o"/><path class="i18r14osf"/><path class="rrzhgezff wm-s"/></g>`,
		"fallback": "withicons-retro:list-minus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-wf5hp6d.css';
import '../../css/t/t1ayskbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j-wf5hp6d"/><path class="t1ayskbwe"/></g>`,
		"fallback": "coolicons:music-note-duotone-round",
	});
}

export default Component;

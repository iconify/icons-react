import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rv8198xxh.css';
import '../../css/e/eh1m1mm7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rv8198xxh"/><path class="eh1m1mm7x"/></g>`,
		"fallback": "proicons:panel-left-open",
	});
}

export default Component;

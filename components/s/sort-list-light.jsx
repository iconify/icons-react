import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/e98saobvs.css';
import '../../css/l/lkr83rggl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="e98saobvs"/><path class="lkr83rggl"/></g>`,
		"fallback": "lets-icons:sort-list-light",
	});
}

export default Component;

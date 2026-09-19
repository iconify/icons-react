import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ukwelccvm.css';
import '../../css/k/koa2bfbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ukwelccvm"/><path class="koa2bfbeo"/></g>`,
		"fallback": "icon-park:invert-right",
	});
}

export default Component;

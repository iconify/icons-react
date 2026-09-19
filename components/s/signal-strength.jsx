import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jia142bum.css';
import '../../css/i/i_3be54om.css';
import '../../css/n/n8xhjmb-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jia142bum"/><path class="i_3be54om"/><path class="n8xhjmb-g"/></g>`,
		"fallback": "icon-park-solid:signal-strength",
	});
}

export default Component;

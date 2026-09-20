import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9btwmb_a.css';
import '../../css/k/kvxbn0d2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9btwmb_a"/><path class="kvxbn0d2m"/></g>`,
		"fallback": "streamline-plump-color:reduced-inequalities-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8dfmssmu.css';
import '../../css/s/s6ey6lbjj.css';
import '../../css/f/fduciibru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8dfmssmu"/><rect class="s6ey6lbjj"/><circle transform="matrix(0 -1 -1 0 30 24)" class="fduciibru"/></g>`,
		"fallback": "icon-park-outline:wallet-three",
	});
}

export default Component;

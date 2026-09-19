import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kta91-bwj.css';
import '../../css/y/yo439s51q.css';
import '../../css/p/py5prwa5f.css';
import '../../css/u/uuoiwqtfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kta91-bwj"/><path class="yo439s51q"/><path class="py5prwa5f"/><path class="uuoiwqtfb"/></g>`,
		"fallback": "icon-park-outline:sapling",
	});
}

export default Component;

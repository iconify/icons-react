import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uc9eee9iy.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/n/nlvlembbk.css';
import '../../css/e/e5wxgebia.css';
import '../../css/i/iwxwsacaj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uc9eee9iy"/><path class="q6u6gfbgw"/><rect class="nlvlembbk"/><path class="e5wxgebia"/><path class="iwxwsacaj"/></g>`,
		"fallback": "icon-park-outline:locking-picture",
	});
}

export default Component;

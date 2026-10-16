import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wo9n5kb_f.css';
import '../../css/e/e9dwx7bxt.css';
import '../../css/s/s1kqxibiq.css';
import '../../css/n/ny1tw4bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wo9n5kb_f"/><path class="e9dwx7bxt"/><path class="s1kqxibiq"/><path class="ny1tw4bjo"/></g>`,
		"fallback": "andrsrxn:video-sparkle",
	});
}

export default Component;

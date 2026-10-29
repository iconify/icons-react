import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k1ewr4bgn.css';
import '../../css/m/mf03hhbbg.css';
import '../../css/i/i0gy4iser.css';
import '../../css/p/pmhci7c4q.css';
import '../../css/l/l6x6q3i-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k1ewr4bgn wm-deco"/><path class="mf03hhbbg wm-deco"/><path class="i0gy4iser wm-k"/><path class="pmhci7c4q wm-a"/><path class="l6x6q3i-w wm-k"/></g>`,
		"fallback": "withicons:list-blueprint",
	});
}

export default Component;

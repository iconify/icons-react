import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qen4ux05d.css';
import '../../css/a/afx3wjhic.css';
import '../../css/c/c-frn5b_h.css';
import '../../css/n/ni2s7jrqo.css';
import '../../css/k/kveoqhyms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qen4ux05d wm-deco"/><path class="afx3wjhic wm-deco"/><path class="c-frn5b_h wm-deco"/><path class="ni2s7jrqo wm-k"/><path class="kveoqhyms wm-a"/></g>`,
		"fallback": "withicons:wand-sparkles-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/by63njbtm.css';
import '../../css/q/qah7a8bkr.css';
import '../../css/x/xurpiib7h.css';
import '../../css/j/jeyqygbsu.css';
import '../../css/j/jh7so06mk.css';
import '../../css/t/tzf8g741h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="by63njbtm wm-deco"/><path class="qah7a8bkr wm-deco"/><path class="wm-deco xurpiib7h"/><path class="jeyqygbsu wm-k"/><path class="jh7so06mk wm-a"/><path class="tzf8g741h wm-a"/></g>`,
		"fallback": "withicons:radio-blueprint",
	});
}

export default Component;

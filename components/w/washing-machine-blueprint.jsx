import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t00efm1lc.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/l62u4yctj.css';
import '../../css/i/i_-ric9xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t00efm1lc wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="l62u4yctj wm-k"/><path class="i_-ric9xj wm-a"/></g>`,
		"fallback": "withicons:washing-machine-blueprint",
	});
}

export default Component;

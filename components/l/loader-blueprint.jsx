import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bjqil1l7x.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qa-0fibzt.css';
import '../../css/e/ey65q7bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bjqil1l7x wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="qa-0fibzt wm-k"/><path class="ey65q7bnk wm-a"/></g>`,
		"fallback": "withicons:loader-blueprint",
	});
}

export default Component;

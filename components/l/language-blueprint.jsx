import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t48ysh3bp.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/anj_d_0wb.css';
import '../../css/b/bpyc-jb6o.css';
import '../../css/s/stxlgacel.css';
import '../../css/u/utbokwbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t48ysh3bp wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="anj_d_0wb wm-k"/><path class="bpyc-jb6o wm-k"/><path class="stxlgacel wm-a"/><path class="utbokwbaq wm-a"/></g>`,
		"fallback": "withicons:language-blueprint",
	});
}

export default Component;

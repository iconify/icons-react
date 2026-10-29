import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q8vj19bug.css';
import '../../css/l/l1rie51tn.css';
import '../../css/l/li3on2b9m.css';
import '../../css/k/kmul1nokh.css';
import '../../css/n/nk75sfb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="q8vj19bug wm-deco"/><path class="l1rie51tn wm-deco"/><path class="li3on2b9m wm-k"/><path class="kmul1nokh wm-a"/><path class="nk75sfb7r wm-a"/></g>`,
		"fallback": "withicons:speaker-blueprint",
	});
}

export default Component;

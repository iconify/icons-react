import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/u/u7s_9vzkd.css';
import '../../css/o/o6l1_m8up.css';
import '../../css/o/o8_eirm0g.css';
import '../../css/w/w1b3o1jpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="u7s_9vzkd"/><path class="o6l1_m8up"/></g><path clip-rule="evenodd" class="o8_eirm0g"/><path class="w1b3o1jpx"/></g>`,
		"fallback": "pepicons:speaker-low-print",
	});
}

export default Component;

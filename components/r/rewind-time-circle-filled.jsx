import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bm8ahcbms.css';
import '../../css/d/dp5rydbvi.css';
import '../../css/h/h2ldmepde.css';
import '../../css/t/t_mc6ydjd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="bm8ahcbms"/><path class="dp5rydbvi"/><path class="h2ldmepde"/><path class="t_mc6ydjd"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:rewind-time-circle-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bm8ahcbms.css';
import '../../css/d/dp5rydbvi.css';
import '../../css/h/h2ldmepde.css';
import '../../css/t/t_mc6ydjd.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bm8ahcbms"/><path class="dp5rydbvi"/><path class="h2ldmepde"/><path class="t_mc6ydjd"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:rewind-time-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qepuaqbvx.css';
import '../../css/h/he2gnabzt.css';
import '../../css/q/qhl6imb-r.css';
import '../../css/t/tl49x2bbn.css';
import '../../css/w/wmern5xfm.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 947.638)" class="qepuaqbvx"><rect class="he2gnabzt"/><g class="qhl6imb-r"><path class="tl49x2bbn"/><path class="wmern5xfm"/></g></g>`,
		"fallback": "bpmn:send-task",
	});
}

export default Component;

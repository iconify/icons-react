import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e9_vu52aq.css';
import '../../css/l/llqndirqk.css';
import '../../css/s/s4jtdugoi.css';
import '../../css/m/mdnfvcd_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e9_vu52aq"/><path class="llqndirqk"/><path class="s4jtdugoi"/><path class="mdnfvcd_q"/></g>`,
		"fallback": "matita:repeat",
	});
}

export default Component;

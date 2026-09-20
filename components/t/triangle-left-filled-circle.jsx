import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/m/m5l_ll5nz.css';
import '../../css/a/akjki3nrq.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="m5l_ll5nz"/><path class="akjki3nrq"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:triangle-left-filled-circle",
	});
}

export default Component;

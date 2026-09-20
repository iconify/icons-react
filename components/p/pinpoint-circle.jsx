import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kzhjb5qxl.css';
import '../../css/w/w4-g1zb2h.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kzhjb5qxl"/><path class="w4-g1zb2h"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:pinpoint-circle",
	});
}

export default Component;

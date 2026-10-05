import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/ms5-2abac.css';
import '../../css/t/tp6smyb_b.css';
import '../../css/n/nqx3omx6e.css';
import '../../css/y/yusuv_bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ms5-2abac"/><path class="tp6smyb_b"/><path class="nqx3omx6e"/><path class="yusuv_bmy"/></g>`,
		"fallback": "matita:redo",
	});
}

export default Component;

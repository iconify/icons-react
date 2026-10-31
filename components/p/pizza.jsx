import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/say9z7j7b.css';
import '../../css/l/l7q_zgbtf.css';
import '../../css/z/z263-nngx.css';
import '../../css/u/ub5a4-byi.css';
import '../../css/r/rggh7obei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="say9z7j7b wm-shadow"/><path class="l7q_zgbtf wm-shadow"/><path class="z263-nngx"/><path class="ub5a4-byi"/><path class="rggh7obei"/></g>`,
		"fallback": "withicons-brutal:pizza",
	});
}

export default Component;

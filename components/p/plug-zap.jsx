import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o5_wdp8lr.css';
import '../../css/x/xk7yxfqlv.css';
import '../../css/l/l6n8hebks.css';
import '../../css/c/cmbs0f95r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o5_wdp8lr wm-a"/><path class="xk7yxfqlv"/><path class="l6n8hebks wm-a"/><path class="cmbs0f95r wm-s"/></g>`,
		"fallback": "withicons:plug-zap",
	});
}

export default Component;

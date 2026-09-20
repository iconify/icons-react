import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/z/zel9ribid.css';
import '../../css/s/s999b4bfv.css';
import '../../css/g/g56rfmb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="zel9ribid"/><path class="s999b4bfv"/><path class="g56rfmb2s"/></g>`,
		"fallback": "solar:soundwave-square-bold-duotone",
	});
}

export default Component;

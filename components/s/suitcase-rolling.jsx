import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibyn0lb_i.css';
import '../../css/v/vwyavrbbf.css';
import '../../css/o/ovyw3xb-v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ibyn0lb_i"/><path class="vwyavrbbf"/><path class="ovyw3xb-v"/></g>`,
		"fallback": "streamline-flex-color:suitcase-rolling",
	});
}

export default Component;

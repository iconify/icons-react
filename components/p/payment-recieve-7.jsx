import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/svt5_wl-j.css';
import '../../css/e/ekk1nn8cl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="svt5_wl-j"/><path class="ekk1nn8cl"/></g>`,
		"fallback": "streamline-plump:payment-recieve-7",
	});
}

export default Component;

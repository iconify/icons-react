import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hcsdoz9wp.css';
import '../../css/q/qnr5tyb9v.css';
import '../../css/u/ueanm_bbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="hcsdoz9wp"/><path class="qnr5tyb9v"/><path class="ueanm_bbq"/></g>`,
		"fallback": "streamline-plump:receipt-cross",
	});
}

export default Component;

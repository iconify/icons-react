import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq6x_qc-w.css';
import '../../css/d/d2omkm1_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq6x_qc-w"/><path class="d2omkm1_w"/>`,
		"fallback": "energy-icons:piggy-bank-48-bold",
	});
}

export default Component;

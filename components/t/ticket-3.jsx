import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1c7blwuq.css';
import '../../css/k/kw2etuk8n.css';
import '../../css/p/pvfzuob1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="q1c7blwuq"/><circle class="kw2etuk8n"/><path class="pvfzuob1v"/></g>`,
		"fallback": "reicon:ticket-3",
	});
}

export default Component;

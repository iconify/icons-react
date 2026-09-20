import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lva8hg_ix.css';
import '../../css/l/l_3c_lb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lva8hg_ix"/><circle class="l_3c_lb_q"/></g>`,
		"fallback": "lucide:timer",
	});
}

export default Component;

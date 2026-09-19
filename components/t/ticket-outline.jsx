import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8t_6bcva.css';
import '../../css/q/q2cv_lb_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8t_6bcva"/><path class="q2cv_lb_w"/>`,
		"fallback": "famicons:ticket-outline",
	});
}

export default Component;

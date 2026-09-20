import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tysv080gv.css';
import '../../css/r/rbu861b0a.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tysv080gv"/><path class="rbu861b0a"/>`,
		"fallback": "lineicons:ticket-alt",
	});
}

export default Component;

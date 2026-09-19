import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_s7g_bel.css';
import '../../css/r/rz282cqep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_s7g_bel"/><path class="rz282cqep"/>`,
		"fallback": "boxicons:user-circle",
	});
}

export default Component;

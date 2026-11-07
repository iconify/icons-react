import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrk4-orkz.css';
import '../../css/u/u15giqb2e.css';
import '../../css/q/qryzuxmyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrk4-orkz"/><path class="u15giqb2e"/><path class="qryzuxmyb"/>`,
		"fallback": "solar:money-roll-bold-duotone",
	});
}

export default Component;

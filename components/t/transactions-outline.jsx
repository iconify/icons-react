import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urpg4uckh.css';
import '../../css/u/u9mxqjotv.css';
import '../../css/d/d7_ejibjy.css';
import '../../css/m/mujnpf-ls.css';
import '../../css/j/j2lw68b4y.css';
import '../../css/m/mdrt5ab6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="urpg4uckh"/><path class="u9mxqjotv"/><circle class="d7_ejibjy"/><path class="mujnpf-ls"/><circle class="j2lw68b4y"/><path class="mdrt5ab6m"/></g>`,
		"fallback": "bitcoin-icons:transactions-outline",
	});
}

export default Component;

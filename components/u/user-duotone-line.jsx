import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unc2embyj.css';
import '../../css/i/ic08mpydp.css';
import '../../css/i/i7s8v2b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="unc2embyj"><path class="ic08mpydp"/><circle class="i7s8v2b0y"/></g>`,
		"fallback": "lets-icons:user-duotone-line",
	});
}

export default Component;

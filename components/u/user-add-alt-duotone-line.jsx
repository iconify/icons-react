import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unc2embyj.css';
import '../../css/x/x8o5_8bro.css';
import '../../css/s/spr08kbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="unc2embyj"><circle class="x8o5_8bro"/><path class="spr08kbuw"/></g>`,
		"fallback": "lets-icons:user-add-alt-duotone-line",
	});
}

export default Component;

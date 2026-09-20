import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ape36fnyv.css';
import '../../css/x/xlr8dz81c.css';
import '../../css/h/h1_u2g9co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ape36fnyv"/><path class="xlr8dz81c"/><circle class="h1_u2g9co"/></g>`,
		"fallback": "lets-icons:table-settings",
	});
}

export default Component;

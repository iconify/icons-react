import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou-ck_tfg.css';
import '../../css/t/twn_ioblf.css';
import '../../css/l/lgr3-yo0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ou-ck_tfg"/><path class="twn_ioblf"/><circle class="lgr3-yo0q"/></g>`,
		"fallback": "iconamoon:notification-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_tt_yboz.css';
import '../../css/e/eh4420btv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="r_tt_yboz"/><path class="eh4420btv"/></g>`,
		"fallback": "skill-icons:prometheus",
	});
}

export default Component;

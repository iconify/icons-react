import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_393lbkl.css';
import '../../css/c/c38arbcur.css';
import '../../css/n/njxkp0atg.css';
import '../../css/k/k7pmohiui.css';
import '../../css/o/omvctkd3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h_393lbkl"/><path class="c38arbcur"/><path class="njxkp0atg"/><path class="k7pmohiui"/><path class="omvctkd3h"/></g>`,
		"fallback": "solar:trellis-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/d/dfshi5fhj.css';
import '../../css/t/tjd07yb8z.css';
import '../../css/f/fdf08cccu.css';
import '../../css/k/kpm7cn8db.css';
import '../../css/d/dnktopiii.css';
import '../../css/l/lgu-u6bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="dfshi5fhj wm-k"/><path class="tjd07yb8z wm-k"/><path class="fdf08cccu wm-shine"/><path class="kpm7cn8db wm-a"/><path class="dnktopiii wm-a"/><path class="lgu-u6bhk wm-a"/></g>`,
		"fallback": "withicons-anime:plus-circle",
	});
}

export default Component;

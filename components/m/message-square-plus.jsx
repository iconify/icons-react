import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fl6rzhb0i.css';
import '../../css/f/f2e39r65u.css';
import '../../css/s/stpa1khhn.css';
import '../../css/c/cv6oon_iy.css';
import '../../css/e/e4h-71bkh.css';
import '../../css/l/l02zxab4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fl6rzhb0i wm-k"/><path class="f2e39r65u wm-k"/><path class="stpa1khhn wm-k"/><path class="cv6oon_iy wm-k"/><path class="e4h-71bkh wm-shine"/><path class="l02zxab4o wm-a"/></g>`,
		"fallback": "withicons-anime:message-square-plus",
	});
}

export default Component;

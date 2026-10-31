import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/acq4hibqf.css';
import '../../css/v/v5lw73bxw.css';
import '../../css/m/mq_494a7e.css';
import '../../css/k/ktjho6bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwVX8Ic7q" x1="9.75" x2="13.75" y1="2.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="acq4hibqf wm-k"/><path class="v5lw73bxw wm-deco"/><path fill="url(#SVGwVX8Ic7q)" class="mq_494a7e wm-k"/><path class="ktjho6bhn wm-shadow"/></g>`,
		"fallback": "withicons-valentine:navigation",
	});
}

export default Component;

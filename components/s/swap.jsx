import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/luan8pbfm.css';
import '../../css/d/ds-2iq13q.css';
import '../../css/a/a3953mw9x.css';
import '../../css/r/ru21t5weo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGM9G60cik" x1="10" x2="14" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="luan8pbfm wm-k"/><path class="ds-2iq13q wm-deco"/><path fill="url(#SVGM9G60cik)" class="a3953mw9x wm-k"/><path class="ru21t5weo wm-shadow"/></g>`,
		"fallback": "withicons-valentine:swap",
	});
}

export default Component;

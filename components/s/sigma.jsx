import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/mc1dbuppm.css';
import '../../css/c/c0hz6zkva.css';
import '../../css/p/pe5vi8ban.css';
import '../../css/t/tbops6hbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3vXOjbhK" x1="9.75" x2="13.75" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="mc1dbuppm wm-k"/><path class="c0hz6zkva wm-deco"/><path fill="url(#SVG3vXOjbhK)" class="pe5vi8ban wm-k"/><path class="tbops6hbk wm-shadow"/></g>`,
		"fallback": "withicons-valentine:sigma",
	});
}

export default Component;

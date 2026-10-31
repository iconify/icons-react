import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/b8pqn0bam.css';
import '../../css/k/krvx4ublj.css';
import '../../css/m/meuhafbze.css';
import '../../css/d/dc3dbfh-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgaUnpdJa" x1="10" x2="14" y1="3.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="b8pqn0bam wm-k"/><path class="krvx4ublj wm-deco"/><path fill="url(#SVGgaUnpdJa)" class="meuhafbze wm-k"/><path class="dc3dbfh-t wm-shadow"/></g>`,
		"fallback": "withicons-valentine:undo",
	});
}

export default Component;

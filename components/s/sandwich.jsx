import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/s9m2d3y1h.css';
import '../../css/x/x5-0ylbgu.css';
import '../../css/i/ijj7tk-hg.css';
import '../../css/t/tt1zsu-lf.css';
import '../../css/o/ogu8gx2oq.css';
import '../../css/j/jo8ajhdbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGm47AjbqF" x1="10" x2="14" y1="2.64" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="s9m2d3y1h wm-k"/><path class="wm-deco x5-0ylbgu"/><path fill="url(#SVGm47AjbqF)" class="ijj7tk-hg wm-k"/><path class="tt1zsu-lf wm-shadow"/><path class="ogu8gx2oq wm-shine"/><path class="jo8ajhdbx wm-shine"/></g>`,
		"fallback": "withicons-valentine:sandwich",
	});
}

export default Component;

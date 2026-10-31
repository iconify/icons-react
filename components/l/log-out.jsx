import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vya8cnb0u.css';
import '../../css/m/mugff_b-q.css';
import '../../css/c/c3jw812ej.css';
import '../../css/q/q2a48ifpg.css';
import '../../css/z/zdijpgs4a.css';
import '../../css/t/tqb2enbkj.css';
import '../../css/v/vdu8mlb3u.css';
import '../../css/b/b5frus52i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBMwQrehP" x1="10.25" x2="14.25" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vya8cnb0u wm-k"/><path class="mugff_b-q wm-a"/><path class="c3jw812ej wm-deco"/><path fill="url(#SVGBMwQrehP)" class="q2a48ifpg wm-k"/><path class="wm-a zdijpgs4a"/><path class="tqb2enbkj wm-shadow"/><path class="vdu8mlb3u wm-shine"/><path class="b5frus52i wm-shine"/></g>`,
		"fallback": "withicons-valentine:log-out",
	});
}

export default Component;

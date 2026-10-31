import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lq80h2bhw.css';
import '../../css/f/fgpkp3bgc.css';
import '../../css/d/d5r9-xb0y.css';
import '../../css/s/sf_43e1pf.css';
import '../../css/b/bqu-lpbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyA7FJd6z" x1="10" x2="14" y1="1.01" y2="22.73" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lq80h2bhw wm-k"/><path class="fgpkp3bgc wm-a"/><path fill="url(#SVGyA7FJd6z)" class="d5r9-xb0y wm-k"/><path class="sf_43e1pf wm-a"/><path class="bqu-lpbei wm-shadow"/></g>`,
		"fallback": "withicons-valentine:sky-lantern",
	});
}

export default Component;

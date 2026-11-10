import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/b/bnek7ksqa.css';
import '../../css/p/p74anlbhw.css';
import '../../css/f/fzobw1bab.css';
import '../../css/r/rh_nkvbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk8wpcb-k"/><path class="bnek7ksqa"/><path class="p74anlbhw"/><circle class="fzobw1bab"/><path class="rh_nkvbxx"/></g>`,
		"fallback": "andrsrxn:mail-at",
	});
}

export default Component;

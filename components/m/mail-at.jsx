import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1y0i2j9f.css';
import '../../css/t/txll4ubpz.css';
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
		"content": `<g class="ft5dv1b6b"><path class="q1y0i2j9f"/><path class="txll4ubpz"/><path class="p74anlbhw"/><circle class="fzobw1bab"/><path class="rh_nkvbxx"/></g>`,
		"fallback": "andrsrxn:mail-at",
	});
}

export default Component;

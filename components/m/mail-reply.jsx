import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1xhdeb8f.css';
import '../../css/r/r_elshbet.css';
import '../../css/l/lc9k9qb3h.css';
import '../../css/w/wqh1yeble.css';
import '../../css/p/p74anlbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1xhdeb8f"/><path class="r_elshbet"/><path class="lc9k9qb3h"/><path class="wqh1yeble"/><path class="p74anlbhw"/></g>`,
		"fallback": "andrsrxn:mail-reply",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/z/z4zv68m0t.css';
import '../../css/p/p74anlbhw.css';
import '../../css/m/mlkzt5b2u.css';
import '../../css/u/uj3e_gbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk8wpcb-k"/><path class="z4zv68m0t"/><path class="p74anlbhw"/><circle class="mlkzt5b2u"/><path class="uj3e_gbeg"/></g>`,
		"fallback": "andrsrxn:mail-at",
	});
}

export default Component;

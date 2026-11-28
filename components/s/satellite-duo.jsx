import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_n87bb0c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ut001yd_u.css';
import '../../css/b/bfidxfbva.css';
import '../../css/u/ucmfhv7ut.css';
import '../../css/e/e_iyibm6y.css';
import '../../css/u/uh8wcl76k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_n87bb0c secondary"/><g class="dt0cm9dhy primary"><path class="ut001yd_u"/><path class="bfidxfbva"/><path class="ucmfhv7ut"/><path class="e_iyibm6y"/><path class="uh8wcl76k"/></g>`,
		"fallback": "iconaut:satellite-duo",
	});
}

export default Component;

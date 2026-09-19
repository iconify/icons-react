import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3kb4cgpl.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/k/kz_q4tp_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r3kb4cgpl"><circle class="xr1zzs9rr"/><path class="kz_q4tp_j"/></g>`,
		"fallback": "iconamoon:play-circle-bold",
	});
}

export default Component;

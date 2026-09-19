import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/p/pp3v195nj.css';
import '../../css/r/rs-d_y_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><circle class="xr1zzs9rr"/><circle class="pp3v195nj"/><circle class="rs-d_y_0o"/></g>`,
		"fallback": "iconamoon:number-8-circle",
	});
}

export default Component;

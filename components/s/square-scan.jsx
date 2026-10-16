import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3pv_wb9r.css';
import '../../css/x/xvu_v82pz.css';
import '../../css/c/cjk244b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 0 17.24)scale(-1 1)" class="f3pv_wb9r"/><path class="xvu_v82pz"/><rect transform="rotate(90 0 17.24)scale(-1 1)" class="cjk244b8d"/></g>`,
		"fallback": "andrsrxn:square-scan",
	});
}

export default Component;

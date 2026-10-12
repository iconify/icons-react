import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eor84ty_j.css';
import '../../css/k/kdv91vbho.css';
import '../../css/a/auo1ow_ga.css';
import '../../css/v/voi6sj_0n.css';
import '../../css/x/xr5pcxbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="eor84ty_j"/><rect class="kdv91vbho"/><rect class="auo1ow_ga"/><rect class="voi6sj_0n"/><path class="xr5pcxbbu"/></g>`,
		"fallback": "andrsrxn:text-items",
	});
}

export default Component;

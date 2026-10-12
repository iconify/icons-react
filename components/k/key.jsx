import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d22qcbcna.css';
import '../../css/w/wntw10bgk.css';
import '../../css/g/ghkrzzbyu.css';
import '../../css/a/atj_t_b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d22qcbcna"/><path class="wntw10bgk"/><path class="ghkrzzbyu"/><path class="atj_t_b3l"/></g>`,
		"fallback": "andrsrxn:key",
	});
}

export default Component;

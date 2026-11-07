import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/l/lmkqdez3d.css';
import '../../css/p/p39idcbfe.css';
import '../../css/d/dpk712b_i.css';
import '../../css/c/c3t75_bqf.css';
import '../../css/o/op1ybnlot.css';
import '../../css/z/zvobeac5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="lmkqdez3d"/><path class="p39idcbfe"/><path class="dpk712b_i"/><path class="c3t75_bqf"/><path class="op1ybnlot"/><path class="zvobeac5y"/></g>`,
		"fallback": "solar:safe-square-linear",
	});
}

export default Component;

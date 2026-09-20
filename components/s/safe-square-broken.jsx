import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/io9p-abnn.css';
import '../../css/c/cj49wvb9s.css';
import '../../css/a/arc04wbve.css';
import '../../css/d/dpk712b_i.css';
import '../../css/c/c3t75_bqf.css';
import '../../css/o/op1ybnlot.css';
import '../../css/z/zvobeac5y.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="io9p-abnn"/><path class="cj49wvb9s"/><path class="arc04wbve"/><path class="dpk712b_i"/><path class="c3t75_bqf"/><path class="op1ybnlot"/><path class="zvobeac5y"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:safe-square-broken",
	});
}

export default Component;

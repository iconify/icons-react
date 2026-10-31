import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2rvs2tic.css';
import '../../css/y/y89ozdbss.css';
import '../../css/s/sd2pc_bri.css';
import '../../css/m/msh874ycp.css';
import '../../css/j/j34pws1up.css';
import '../../css/h/he1t70yqp.css';
import '../../css/k/kcim4trjq.css';
import '../../css/w/wpi0dlbfm.css';
import '../../css/r/rzm10vjyv.css';
import '../../css/o/om1me1m-h.css';
import '../../css/z/zjh1l-56v.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2rvs2tic"/><path class="y89ozdbss"/><path class="sd2pc_bri"/><path class="msh874ycp"/><path class="j34pws1up"/><path class="he1t70yqp"/><path class="kcim4trjq"/><path class="wpi0dlbfm"/><path class="rzm10vjyv"/><path class="om1me1m-h"/><path class="zjh1l-56v"/>`,
		"fallback": "tabler-flags:saint-barthelemy",
	});
}

export default Component;

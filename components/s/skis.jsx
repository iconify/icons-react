import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbunllb1y.css';
import '../../css/y/y-d6i4buo.css';
import '../../css/o/oivct5qcx.css';
import '../../css/u/u-61ogupn.css';
import '../../css/s/shymp9b8h.css';
import '../../css/c/cxo_kunbj.css';
import '../../css/d/dryc8sb-x.css';
import '../../css/v/vkom9mbhj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/hr7c1id_z.css';
import '../../css/e/et_czg-gv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbunllb1y"/><path class="y-d6i4buo"/><path class="oivct5qcx"/><path class="u-61ogupn"/><path class="shymp9b8h"/><path class="cxo_kunbj"/><path class="dryc8sb-x"/><path class="vkom9mbhj"/><g class="ij2x_72vy"><path class="hr7c1id_z"/><path class="et_czg-gv"/></g>`,
		"fallback": "openmoji:skis",
	});
}

export default Component;

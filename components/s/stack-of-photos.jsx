import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz4029_pn.css';
import '../../css/h/h6uh4nvsp.css';
import '../../css/o/omr3ab_jz.css';
import '../../css/k/kmig8rmzt.css';
import '../../css/t/tmnra4bsj.css';
import '../../css/x/x1kf-_b1d.css';
import '../../css/p/pd04_mbda.css';
import '../../css/o/oyk9p_bgt.css';
import '../../css/t/tn-g0mb0v.css';
import '../../css/g/g4q-hz4hv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz4029_pn"/><path class="h6uh4nvsp"/><path class="omr3ab_jz"/><path class="kmig8rmzt"/><path class="tmnra4bsj"/><path class="x1kf-_b1d"/><path class="pd04_mbda"/><path class="oyk9p_bgt"/><path class="tn-g0mb0v"/><circle class="g4q-hz4hv"/>`,
		"fallback": "flat-color-icons:stack-of-photos",
	});
}

export default Component;

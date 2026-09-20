import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro3vc_l6d.css';
import '../../css/c/c87f56bzd.css';
import '../../css/k/kglvwjbbs.css';
import '../../css/u/ulw33ib-v.css';
import '../../css/m/muonrcbwl.css';
import '../../css/h/hivb87bvr.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/g/gntxelbgw.css';
import '../../css/s/suawy6ckf.css';
import '../../css/c/cq_abkb8k.css';
import '../../css/r/rg64pnbns.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro3vc_l6d"/><path class="c87f56bzd"/><path class="kglvwjbbs"/><path class="ulw33ib-v"/><path class="muonrcbwl"/><path class="hivb87bvr"/><g class="doj9dq_jg"><path class="gntxelbgw"/><path class="suawy6ckf"/><path class="cq_abkb8k"/><path class="rg64pnbns"/></g>`,
		"fallback": "openmoji:seat",
	});
}

export default Component;

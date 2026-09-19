import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3xwghbbt.css';
import '../../css/e/e9kh_hcnc.css';
import '../../css/p/ppiitbcbm.css';
import '../../css/k/kmp_q18cm.css';
import '../../css/q/q_zg1k_eb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 g3xwghbbt"/><path class="clr-i-outline clr-i-outline-path-2 e9kh_hcnc"/><path class="clr-i-outline clr-i-outline-path-3 ppiitbcbm"/><path class="clr-i-outline clr-i-outline-path-4 kmp_q18cm"/><path class="clr-i-outline clr-i-outline-path-5 q_zg1k_eb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:unarchive-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/c/cq2cv1b_b.css';
import '../../css/a/a7fuovaen.css';
import '../../css/y/yse-k_tnb.css';
import '../../css/o/oxy-3764i.css';
import '../../css/i/ikvzynb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="cq2cv1b_b"/><path class="a7fuovaen"/><path class="yse-k_tnb"/><path class="oxy-3764i"/><path class="ikvzynb_n"/></g>`,
		"fallback": "solar:treadmill-round-line-duotone",
	});
}

export default Component;

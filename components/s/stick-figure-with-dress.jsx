import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8m_vubzy.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/t9m0l1kgt.css';
import '../../css/q/qv3s-3bkj.css';
import '../../css/r/r8x_2_5yj.css';
import '../../css/m/m8195sbyc.css';
import '../../css/y/y55dqq1dn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8m_vubzy"/><g class="brzn_0bpr"><path class="t9m0l1kgt"/><path class="qv3s-3bkj"/><path class="r8x_2_5yj"/><circle class="m8195sbyc"/><path class="y55dqq1dn"/></g>`,
		"fallback": "openmoji:stick-figure-with-dress",
	});
}

export default Component;

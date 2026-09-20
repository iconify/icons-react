import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzbh_urec.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/p28c7-b8k.css';
import '../../css/x/xdloo4m_h.css';
import '../../css/j/ju8xeiqzy.css';
import '../../css/k/kpzn3ybxl.css';
import '../../css/s/sqvb8-iqm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzbh_urec"/><g class="brzn_0bpr"><path class="p28c7-b8k"/><path class="xdloo4m_h"/><circle class="ju8xeiqzy"/><circle class="kpzn3ybxl"/><path class="sqvb8-iqm"/></g>`,
		"fallback": "openmoji:stretcher",
	});
}

export default Component;

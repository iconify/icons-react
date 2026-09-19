import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tdyuizbqn.css';
import '../../css/l/l33zoes5a.css';
import '../../css/o/o1u583b9p.css';
import '../../css/e/ezgrq_b8g.css';
import '../../css/y/yxu6vo-xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="tdyuizbqn"/><circle class="l33zoes5a"/><circle class="o1u583b9p"/><circle class="ezgrq_b8g"/><path class="yxu6vo-xt"/></g>`,
		"fallback": "hugeicons:skew",
	});
}

export default Component;

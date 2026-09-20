import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g5wt_wbci.css';
import '../../css/x/xn-b0acce.css';
import '../../css/q/qnqthcbii.css';
import '../../css/m/m8rlb1beu.css';
import '../../css/q/q75k85b7n.css';
import '../../css/m/me86ccc_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><rect class="g5wt_wbci"/><path class="xn-b0acce"/><path class="qnqthcbii"/><path class="m8rlb1beu"/><path class="q75k85b7n"/><circle class="me86ccc_a"/></g>`,
		"fallback": "solar:scooter-linear",
	});
}

export default Component;

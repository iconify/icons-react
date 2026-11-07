import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_y25wbci.css';
import '../../css/q/qmig79b_v.css';
import '../../css/x/x3dt49afq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_y25wbci"/><path class="qmig79b_v"/><path class="x3dt49afq"/>`,
		"fallback": "solar:separator-horizontal-bold",
	});
}

export default Component;

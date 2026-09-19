import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suxitebkd.css';
import '../../css/y/yhpn0bbqq.css';
import '../../css/m/mxxkvj7yc.css';
import '../../css/l/lo5w_u_kr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suxitebkd"/><path class="yhpn0bbqq"/><path class="mxxkvj7yc"/><path class="lo5w_u_kr"/>`,
		"fallback": "fxemoji:stampedenvelope",
	});
}

export default Component;

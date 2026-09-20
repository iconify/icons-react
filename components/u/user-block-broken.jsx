import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/n/nuv1qz_2q.css';
import '../../css/v/v9_s5dbjh.css';
import '../../css/x/xjh3njbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="nuv1qz_2q"/><path class="v9_s5dbjh"/><circle class="xjh3njbok"/></g>`,
		"fallback": "solar:user-block-broken",
	});
}

export default Component;

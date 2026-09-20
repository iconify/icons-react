import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yujhm0l1u.css';
import '../../css/z/zs_iofb5o.css';
import '../../css/u/uz9ll1pqo.css';
import '../../css/n/nbyuuco7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="yujhm0l1u"/><path class="zs_iofb5o"/><circle class="uz9ll1pqo"/><circle class="nbyuuco7n"/></g>`,
		"fallback": "lets-icons:sad",
	});
}

export default Component;

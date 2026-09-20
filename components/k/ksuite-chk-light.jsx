import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfusopbkd.css';
import '../../css/j/jx1d2towh.css';
import '../../css/x/xj6r9dbct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfusopbkd"/><path class="jx1d2towh"/><path class="xj6r9dbct"/>`,
		"fallback": "selfhst:ksuite-chk-light",
	});
}

export default Component;

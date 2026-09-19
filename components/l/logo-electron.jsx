import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up41n5_fe.css';
import '../../css/y/yb5y__l1h.css';
import '../../css/x/x8dhmccog.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up41n5_fe"/><path class="yb5y__l1h"/><path class="x8dhmccog"/>`,
		"fallback": "ion:logo-electron",
	});
}

export default Component;

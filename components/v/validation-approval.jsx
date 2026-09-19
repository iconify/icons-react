import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yxzz75b0n.css';
import '../../css/z/z2f3i4b3x.css';
import '../../css/l/l-7doq5vv.css';
import '../../css/w/wi18ppj5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yxzz75b0n"/><path class="z2f3i4b3x"/><path class="l-7doq5vv"/><path class="wi18ppj5o"/></g>`,
		"fallback": "hugeicons:validation-approval",
	});
}

export default Component;

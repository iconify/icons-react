import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xkqyiwblc.css';
import '../../css/z/z0e4ip2yf.css';
import '../../css/d/dt10bzeut.css';
import '../../css/e/e5joplaob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="xkqyiwblc"/><path class="z0e4ip2yf"/><ellipse class="dt10bzeut"/><path class="e5joplaob"/></g>`,
		"fallback": "solar:users-group-rounded-line-duotone",
	});
}

export default Component;

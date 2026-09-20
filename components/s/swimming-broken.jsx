import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yz9__bc6c.css';
import '../../css/x/xuabsbc5q.css';
import '../../css/i/in-q1r46k.css';
import '../../css/y/yn2cyvv6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yz9__bc6c"/><path class="xuabsbc5q"/><path class="in-q1r46k"/><path class="yn2cyvv6b"/></g>`,
		"fallback": "solar:swimming-broken",
	});
}

export default Component;

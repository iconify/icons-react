import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wxqivyo1u.css';
import '../../css/l/lx_r95vpd.css';
import '../../css/g/g1z1i765o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wxqivyo1u"/><ellipse class="lx_r95vpd"/><path class="g1z1i765o"/></g>`,
		"fallback": "evicons:roaming",
	});
}

export default Component;

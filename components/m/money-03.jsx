import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_9gjeb9i.css';
import '../../css/e/exv6zmb5k.css';
import '../../css/x/xy48k2-su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a_9gjeb9i"/><path class="exv6zmb5k"/><path class="xy48k2-su"/></g>`,
		"fallback": "hugeicons:money-03",
	});
}

export default Component;

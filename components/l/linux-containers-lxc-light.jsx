import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wap4fu7vn.css';
import '../../css/m/m85zrbbfy.css';
import '../../css/y/y1178jbwh.css';
import '../../css/l/l_u0qmb7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wap4fu7vn"/><path class="m85zrbbfy"/><path class="y1178jbwh"/><path class="l_u0qmb7a"/>`,
		"fallback": "selfhst:linux-containers-lxc-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sb6pk9_pi.css';
import '../../css/w/wbzrt3bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><rect class="sb6pk9_pi"/><path class="wbzrt3bll"/></g>`,
		"fallback": "lets-icons:mic",
	});
}

export default Component;

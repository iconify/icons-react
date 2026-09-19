import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wlrq522he.css';
import '../../css/f/fh5fn_kou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wlrq522he"/><path class="fh5fn_kou"/></g>`,
		"fallback": "hugeicons:tiltify",
	});
}

export default Component;

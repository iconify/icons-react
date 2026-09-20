import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j750p1b9v.css';
import '../../css/i/iopw2xbzb.css';
import '../../css/f/fyy510_qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="j750p1b9v"/><path class="iopw2xbzb"/><path class="fyy510_qu"/></g>`,
		"fallback": "proicons:road-barrier",
	});
}

export default Component;

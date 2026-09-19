import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j0d1e4bgb.css';
import '../../css/s/s10b5obbo.css';
import '../../css/u/uebsytbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="j0d1e4bgb"/><path class="s10b5obbo"/><path class="uebsytbrf"/></g>`,
		"fallback": "iconoir:user-love",
	});
}

export default Component;

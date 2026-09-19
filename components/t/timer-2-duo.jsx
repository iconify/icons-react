import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz825ub8o.css';
import '../../css/m/m8kczn7sq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yz825ub8o"/><path class="m8kczn7sq"/></g>`,
		"fallback": "glyphs:timer-2-duo",
	});
}

export default Component;

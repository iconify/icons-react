import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9fb59bts.css';
import '../../css/h/hj5n3xbhm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="x9fb59bts"/><path class="hj5n3xbhm"/></g>`,
		"fallback": "thesvg-color:orshot",
	});
}

export default Component;

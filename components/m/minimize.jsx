import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u1c40mbzp.css';
import '../../css/l/l-esgwk4n.css';
import '../../css/g/gfk1j8bwj.css';
import '../../css/x/xarwo-d3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u1c40mbzp wm-shadow"/><path class="l-esgwk4n wm-shadow"/><path class="gfk1j8bwj"/><path class="xarwo-d3l"/></g>`,
		"fallback": "withicons-brutal:minimize",
	});
}

export default Component;

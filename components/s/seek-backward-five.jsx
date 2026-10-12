import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5bfowbny.css';
import '../../css/v/v8ox6mbiy.css';
import '../../css/i/iw8numbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5bfowbny"/><path class="v8ox6mbiy"/><path class="iw8numbzp"/></g>`,
		"fallback": "andrsrxn:seek-backward-five",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwjtq0bon.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xs3efil7b.css';
import '../../css/m/mmizfzbwi.css';
import '../../css/w/we9upfblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwjtq0bon secondary"/><g class="dt0cm9dhy primary"><path class="xs3efil7b"/><path class="mmizfzbwi"/><path class="we9upfblt"/></g>`,
		"fallback": "iconaut:sailboat-duo",
	});
}

export default Component;

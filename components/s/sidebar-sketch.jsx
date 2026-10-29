import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rjnqrnbqr.css';
import '../../css/e/eo5njqbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rjnqrnbqr wm-deco"/><path class="eo5njqbna wm-k"/></g>`,
		"fallback": "withicons:sidebar-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qtri30bwf.css';
import '../../css/j/j0ex7ac3k.css';
import '../../css/c/cbh5v1b3e.css';
import '../../css/w/w-xvp5-hk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qtri30bwf"/><path class="j0ex7ac3k"/><path class="cbh5v1b3e"/><path class="w-xvp5-hk"/></g>`,
		"fallback": "icon-park:menu-unfold",
	});
}

export default Component;

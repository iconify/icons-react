import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nbw96fb6o.css';
import '../../css/r/rix9_bcxu.css';
import '../../css/b/b34nk39nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nbw96fb6o"/><path class="rix9_bcxu"/><path class="b34nk39nk"/></g>`,
		"fallback": "hugeicons:web-design-02",
	});
}

export default Component;

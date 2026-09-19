import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fo8x46baf.css';
import '../../css/d/dwkvoqbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fo8x46baf"/><path class="dwkvoqbgr"/></g>`,
		"fallback": "iconoir:settings-profiles",
	});
}

export default Component;

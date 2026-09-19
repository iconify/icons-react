import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rad4py0nl.css';
import '../../css/w/wri6_5gwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rad4py0nl"/><path class="wri6_5gwl"/></g>`,
		"fallback": "iconamoon:player-play-duotone",
	});
}

export default Component;

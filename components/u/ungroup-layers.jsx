import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxggonbsq.css';
import '../../css/y/ynzf86bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rxggonbsq"/><path class="ynzf86bnc"/></g>`,
		"fallback": "hugeicons:ungroup-layers",
	});
}

export default Component;

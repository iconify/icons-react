import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-nfw68nc.css';
import '../../css/c/c4shklb7z.css';
import '../../css/a/al8gf2bkd.css';
import '../../css/r/rmbkrup2p.css';
import '../../css/w/wwhta8rci.css';
import '../../css/e/ez5yvcb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-nfw68nc"/><path class="c4shklb7z"/><path class="al8gf2bkd"/><path class="rmbkrup2p"/><path class="wwhta8rci"/><path class="ez5yvcb0u"/></g>`,
		"fallback": "solar:playlist-2-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s963lnjyn.css';
import '../../css/r/raeld23bm.css';
import '../../css/b/bmnwrrbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s963lnjyn"/><path class="raeld23bm"/><path class="bmnwrrbsb"/></g>`,
		"fallback": "akar-icons:radish",
	});
}

export default Component;

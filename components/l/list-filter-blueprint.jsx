import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yz6cc9brd.css';
import '../../css/s/sra97_a6j.css';
import '../../css/l/lo0kr2blb.css';
import '../../css/m/m7lonbwkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yz6cc9brd"/><path class="sra97_a6j wm-deco"/><path class="lo0kr2blb wm-k"/><path class="m7lonbwkx wm-k"/></g>`,
		"fallback": "withicons:list-filter-blueprint",
	});
}

export default Component;

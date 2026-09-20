import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0p9k7b2i.css';
import '../../css/j/jga3t_fym.css';
import '../../css/i/i1_-yabje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m0p9k7b2i"/><path class="jga3t_fym"/><path class="i1_-yabje"/></g>`,
		"fallback": "streamline-cyber-color:park",
	});
}

export default Component;

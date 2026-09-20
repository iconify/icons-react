import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnln41ekb.css';
import '../../css/a/a19wi8bwh.css';
import '../../css/v/v6r8pzbir.css';
import '../../css/j/j2_tkw3xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gnln41ekb"/><path class="a19wi8bwh"/><path class="v6r8pzbir"/><path class="j2_tkw3xk"/></g>`,
		"fallback": "streamline-cyber-color:scissor-2",
	});
}

export default Component;

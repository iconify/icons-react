import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl7y4inub.css';
import '../../css/f/fxapsu19g.css';
import '../../css/p/pritg-b0k.css';
import '../../css/r/r_1lrbbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl7y4inub"/><path class="fxapsu19g"/><path class="pritg-b0k"/><path class="r_1lrbbxd"/></g>`,
		"fallback": "streamline-cyber-color:microphone-on-2",
	});
}

export default Component;

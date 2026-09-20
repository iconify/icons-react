import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj4ytohox.css';
import '../../css/f/fw7d0bkyc.css';
import '../../css/b/bfr3sb7fy.css';
import '../../css/l/ldl6rcc7g.css';
import '../../css/w/wpj290jnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tj4ytohox"/><path class="fw7d0bkyc"/><path class="bfr3sb7fy"/><path class="ldl6rcc7g"/><path class="wpj290jnm"/></g>`,
		"fallback": "streamline-cyber-color:pen-tool",
	});
}

export default Component;

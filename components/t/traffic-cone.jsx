import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3xs33sac.css';
import '../../css/v/vmndxib7n.css';
import '../../css/l/lo58v5b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l3xs33sac"/><path class="vmndxib7n"/><path class="lo58v5b1c"/></g>`,
		"fallback": "streamline-cyber-color:traffic-cone",
	});
}

export default Component;

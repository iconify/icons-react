import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8e-hpsks.css';
import '../../css/u/u5iqbwz8l.css';
import '../../css/w/w2tr5mu5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8e-hpsks"/><path class="u5iqbwz8l"/><path class="w2tr5mu5n"/></g>`,
		"fallback": "tdesign:verified",
	});
}

export default Component;

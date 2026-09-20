import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1gm3nbbs.css';
import '../../css/p/p7s9ddc2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1gm3nbbs"/><path class="p7s9ddc2n"/></g>`,
		"fallback": "tdesign:patio",
	});
}

export default Component;

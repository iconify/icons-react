import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uuazlv-wm.css';
import '../../css/z/z2q_djz6o.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="uuazlv-wm"/><path class="z2q_djz6o"/></g>`,
		"fallback": "skill-icons:rust",
	});
}

export default Component;

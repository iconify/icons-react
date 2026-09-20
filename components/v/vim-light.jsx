import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/o/oposy-8ib.css';
import '../../css/i/ixm6hkb_s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="oposy-8ib"/><path class="ixm6hkb_s"/></g>`,
		"fallback": "skill-icons:vim-light",
	});
}

export default Component;

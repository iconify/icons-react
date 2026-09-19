import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2rcctbrf.css';
import '../../css/d/d6xs-gxot.css';
import '../../css/o/o7pw7f3gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2rcctbrf"/><circle transform="rotate(-180 11 11)" class="d6xs-gxot"/><path class="o7pw7f3gm"/></g>`,
		"fallback": "iconamoon:pen-light",
	});
}

export default Component;

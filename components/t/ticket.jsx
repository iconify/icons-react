import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugq19dr1m.css';
import '../../css/e/evvg3r27v.css';
import '../../css/c/c9vb-8b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugq19dr1m"/><path class="evvg3r27v"/><path class="c9vb-8b2l"/></g>`,
		"fallback": "tdesign:ticket",
	});
}

export default Component;

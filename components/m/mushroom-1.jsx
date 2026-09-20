import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxdq25e-c.css';
import '../../css/g/gnbaqdmlc.css';
import '../../css/e/ert6iwbnr.css';
import '../../css/f/fgq3oyb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxdq25e-c"/><path class="gnbaqdmlc"/><path class="ert6iwbnr"/><path class="fgq3oyb1r"/></g>`,
		"fallback": "tdesign:mushroom-1",
	});
}

export default Component;

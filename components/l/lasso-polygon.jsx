import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdab4_b6w.css';
import '../../css/u/usqgjzbkf.css';
import '../../css/i/iuk-_6mjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jdab4_b6w"/><path class="usqgjzbkf"/><path class="iuk-_6mjr"/></g>`,
		"fallback": "andrsrxn:lasso-polygon",
	});
}

export default Component;

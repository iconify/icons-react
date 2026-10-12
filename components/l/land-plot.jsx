import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kimja1bft.css';
import '../../css/h/hkr50px7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kimja1bft"/><path class="hkr50px7g"/></g>`,
		"fallback": "andrsrxn:land-plot",
	});
}

export default Component;

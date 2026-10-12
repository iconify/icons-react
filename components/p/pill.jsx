import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1ud7pb-u.css';
import '../../css/f/f3524rbvi.css';
import '../../css/i/igufa3bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1ud7pb-u"/><rect transform="rotate(44.193 8.89 20.52)skewY(-.252)" class="f3524rbvi"/><path class="igufa3bwt"/></g>`,
		"fallback": "andrsrxn:pill",
	});
}

export default Component;

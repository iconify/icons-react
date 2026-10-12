import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piyvq7btz.css';
import '../../css/n/nuevv6bsq.css';
import '../../css/t/ta5yezbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="piyvq7btz"/><path class="nuevv6bsq"/><path class="ta5yezbzg"/></g>`,
		"fallback": "andrsrxn:invoice",
	});
}

export default Component;

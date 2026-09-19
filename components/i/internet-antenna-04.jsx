import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kd4lobgva.css';
import '../../css/e/e3c44ysnt.css';
import '../../css/d/duqj2zj1k.css';
import '../../css/f/fi19q96cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kd4lobgva"/><path class="e3c44ysnt"/><path class="duqj2zj1k"/><path class="fi19q96cf"/></g>`,
		"fallback": "hugeicons:internet-antenna-04",
	});
}

export default Component;

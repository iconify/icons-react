import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftjzrub9c.css';
import '../../css/n/n0n2j42-l.css';
import '../../css/p/p74anlbhw.css';
import '../../css/l/loudukbom.css';
import '../../css/z/zytchvkpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftjzrub9c"/><path class="n0n2j42-l"/><path class="p74anlbhw"/><rect transform="rotate(-45 29.99 -16.96)scale(1 -1)" class="loudukbom"/><path class="zytchvkpo"/></g>`,
		"fallback": "andrsrxn:mail-edit",
	});
}

export default Component;

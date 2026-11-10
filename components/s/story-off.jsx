import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7yyl0qiu.css';
import '../../css/g/g014ndn0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="r7yyl0qiu"/><path class="g014ndn0d"/></g>`,
		"fallback": "andrsrxn:story-off",
	});
}

export default Component;

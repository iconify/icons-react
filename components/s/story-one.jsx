import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7yyl0qiu.css';
import '../../css/c/c7yplqb4k.css';
import '../../css/h/h6kvn-bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="r7yyl0qiu"/><path class="c7yplqb4k"/><path class="h6kvn-bip"/></g>`,
		"fallback": "andrsrxn:story-one",
	});
}

export default Component;

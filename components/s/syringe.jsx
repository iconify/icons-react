import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avmdd1a9m.css';
import '../../css/m/muh-rkjda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 8.9 11.21)" class="avmdd1a9m"/><path class="muh-rkjda"/></g>`,
		"fallback": "andrsrxn:syringe",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-soyc20t.css';
import '../../css/m/mj4u2ibud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-soyc20t"/><path class="mj4u2ibud"/></g>`,
		"fallback": "iconamoon:number-6-square-light",
	});
}

export default Component;

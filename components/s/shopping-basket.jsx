import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/f/fz2woib5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ug-g1ubih"/><path class="fz2woib5m wm-a"/></g>`,
		"fallback": "withicons:shopping-basket",
	});
}

export default Component;

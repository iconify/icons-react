import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x57fcibhl.css';
import '../../css/m/mn1_zfo6x.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/a/a2fzhvk0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x57fcibhl"/><path class="mn1_zfo6x wm-a"/><path class="ug-g1ubih"/><path class="a2fzhvk0r wm-a"/></g>`,
		"fallback": "withicons:shopping-basket-duo",
	});
}

export default Component;

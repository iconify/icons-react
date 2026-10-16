import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5_kp7xga.css';
import '../../css/p/p6gxp-bjt.css';
import '../../css/h/h2w2gxl4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5_kp7xga"/><path class="p6gxp-bjt"/><path class="h2w2gxl4v"/>`,
		"fallback": "energy-icons:tension-leg-48-bold",
	});
}

export default Component;

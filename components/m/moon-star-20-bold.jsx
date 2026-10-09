import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohg506bqr.css';
import '../../css/y/yttl06bmd.css';
import '../../css/e/e-yptyqrl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohg506bqr"/><path class="yttl06bmd"/><path class="e-yptyqrl"/>`,
		"fallback": "energy-icons:moon-star-20-bold",
	});
}

export default Component;

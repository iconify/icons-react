import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lehxztmwm.css';
import '../../css/r/r_0sobc6x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lehxztmwm"/><path class="r_0sobc6x"/>`,
		"fallback": "energy-icons:protractor-20-bold",
	});
}

export default Component;

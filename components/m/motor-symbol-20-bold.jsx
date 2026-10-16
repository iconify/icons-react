import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx326_ber.css';
import '../../css/g/g1nn1ub5l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx326_ber"/><path class="g1nn1ub5l"/>`,
		"fallback": "energy-icons:motor-symbol-20-bold",
	});
}

export default Component;

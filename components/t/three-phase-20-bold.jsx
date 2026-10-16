import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iicur4vle.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iicur4vle"/>`,
		"fallback": "energy-icons:three-phase-20-bold",
	});
}

export default Component;

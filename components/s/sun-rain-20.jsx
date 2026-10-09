import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt41qcbim.css';
import '../../css/d/d122lmxog.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt41qcbim"/><path class="d122lmxog"/>`,
		"fallback": "energy-icons:sun-rain-20",
	});
}

export default Component;

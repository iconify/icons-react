import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zisu_cc5g.css';
import '../../css/i/i8f0698ec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zisu_cc5g"/><path class="i8f0698ec"/>`,
		"fallback": "energy-icons:sun-rain-48-bold",
	});
}

export default Component;

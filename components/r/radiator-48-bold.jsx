import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxjqujbwc.css';
import '../../css/l/l1832ablw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxjqujbwc"/><path class="l1832ablw"/>`,
		"fallback": "energy-icons:radiator-48-bold",
	});
}

export default Component;

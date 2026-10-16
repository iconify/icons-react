import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz7_1-2mp.css';
import '../../css/n/nu73lppyk.css';
import '../../css/q/qffxtubht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz7_1-2mp"/><path class="nu73lppyk"/><path class="qffxtubht"/>`,
		"fallback": "energy-icons:spray-can-48",
	});
}

export default Component;

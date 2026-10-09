import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3in-zb7w.css';
import '../../css/j/jtlfsbcyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3in-zb7w"/><path class="jtlfsbcyo"/>`,
		"fallback": "energy-icons:solar-thermal-48-bold",
	});
}

export default Component;

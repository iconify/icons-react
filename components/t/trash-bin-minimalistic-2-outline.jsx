import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loc47zw8p.css';
import '../../css/f/fib6k6-vs.css';
import '../../css/q/q37ppubrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loc47zw8p"/><path class="fib6k6-vs"/><path class="q37ppubrn"/>`,
		"fallback": "solar:trash-bin-minimalistic-2-outline",
	});
}

export default Component;

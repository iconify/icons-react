import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3kx1i27m.css';
import '../../css/k/k9t1wbbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3kx1i27m"/><path class="k9t1wbbrs"/></g>`,
		"fallback": "lucide:pi",
	});
}

export default Component;

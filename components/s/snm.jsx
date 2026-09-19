import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhekv7b5x.css';
import '../../css/f/fn3-7k3kc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lhekv7b5x"/><path class="fn3-7k3kc"/></g>`,
		"fallback": "cryptocurrency-color:snm",
	});
}

export default Component;

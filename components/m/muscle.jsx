import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khmt06b9h.css';
import '../../css/l/lrnov0b9n.css';
import '../../css/o/o7k4dccfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khmt06b9h"/><path class="lrnov0b9n"/><path class="o7k4dccfe"/></g>`,
		"fallback": "icon-park:muscle",
	});
}

export default Component;

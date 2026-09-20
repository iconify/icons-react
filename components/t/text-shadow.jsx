import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/f25kf5bbl.css';
import '../../css/u/uy-wxpyub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="f25kf5bbl"/><path class="uy-wxpyub"/></g>`,
		"fallback": "streamline-plump:text-shadow",
	});
}

export default Component;

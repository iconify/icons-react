import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l89pn8bop.css';
import '../../css/r/r85id8b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l89pn8bop"/><path class="r85id8b3d"/></g>`,
		"fallback": "lucide:refresh-cw-off",
	});
}

export default Component;

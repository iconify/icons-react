import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o82orwa_g.css';
import '../../css/h/h5z3brl0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o82orwa_g"/><path class="h5z3brl0k"/></g>`,
		"fallback": "lucide:store",
	});
}

export default Component;

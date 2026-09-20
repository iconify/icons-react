import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_g3vebat.css';
import '../../css/d/dpdbd3bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j_g3vebat"/><path class="dpdbd3bze"/></g>`,
		"fallback": "lucide:map-pin-off",
	});
}

export default Component;

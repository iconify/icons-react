import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oqn-ez1bm.css';
import '../../css/h/h_i7uu37s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oqn-ez1bm"/><path class="h_i7uu37s"/></g>`,
		"fallback": "keyline-icons:shuffle-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5amry4cl.css';
import '../../css/k/kmvhfhbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5amry4cl"/><path class="kmvhfhbld"/></g>`,
		"fallback": "keyline-icons:map-pin-plus-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fdgojzbxm.css';
import '../../css/t/t4ug6db2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fdgojzbxm"/><path class="t4ug6db2s"/></g>`,
		"fallback": "keyline-icons:list-minus-duotone",
	});
}

export default Component;

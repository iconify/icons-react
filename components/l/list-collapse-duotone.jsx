import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tf45nxf-h.css';
import '../../css/h/h29js23-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tf45nxf-h"/><path class="h29js23-i"/></g>`,
		"fallback": "keyline-icons:list-collapse-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dvf9cnbjl.css';
import '../../css/d/dto95jbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dvf9cnbjl"/><circle class="dto95jbvb"/></g>`,
		"fallback": "lucide:smartphone-user-round",
	});
}

export default Component;

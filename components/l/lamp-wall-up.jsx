import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vhw4z0p1s.css';
import '../../css/h/hw_cz1bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vhw4z0p1s"/><path class="hw_cz1bmb"/></g>`,
		"fallback": "lucide:lamp-wall-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d0zwnjrwr.css';
import '../../css/r/rz3t5cc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d0zwnjrwr"/><path class="rz3t5cc7i"/></g>`,
		"fallback": "lucide:rotate-3-d",
	});
}

export default Component;

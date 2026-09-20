import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-xbxr47n.css';
import '../../css/o/o6wh0cm_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m-xbxr47n"/><path class="o6wh0cm_m"/></g>`,
		"fallback": "lucide-lab:watermelon",
	});
}

export default Component;

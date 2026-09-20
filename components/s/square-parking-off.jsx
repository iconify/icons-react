import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/es87wyzsk.css';
import '../../css/y/y6iicshxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="es87wyzsk"/><path class="y6iicshxq"/></g>`,
		"fallback": "lucide:square-parking-off",
	});
}

export default Component;

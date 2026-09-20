import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r36waidcn.css';
import '../../css/z/z_x9l5bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r36waidcn"/><path class="z_x9l5bdy"/></g>`,
		"fallback": "lucide-lab:slot-card",
	});
}

export default Component;

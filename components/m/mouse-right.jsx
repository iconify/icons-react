import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ce5r_0b0n.css';
import '../../css/p/p1u_h8b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ce5r_0b0n"/><circle class="p1u_h8b7d"/></g>`,
		"fallback": "lucide:mouse-right",
	});
}

export default Component;

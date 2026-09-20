import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfq0n0blt.css';
import '../../css/i/ik_68s79r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gfq0n0blt"/><path class="ik_68s79r"/></g>`,
		"fallback": "lucide-lab:pie",
	});
}

export default Component;

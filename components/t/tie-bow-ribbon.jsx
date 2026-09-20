import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n33cerbud.css';
import '../../css/q/qu8gtwbob.css';
import '../../css/c/c19kre20f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n33cerbud"/><path class="qu8gtwbob"/><path class="c19kre20f"/></g>`,
		"fallback": "lucide-lab:tie-bow-ribbon",
	});
}

export default Component;

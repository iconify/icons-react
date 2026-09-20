import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pc-74rser.css';
import '../../css/p/pz9e_6cdy.css';
import '../../css/n/nv3r1zbmr.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pc-74rser"/><path class="pz9e_6cdy"/><circle class="nv3r1zbmr"/><circle class="wzga5cc5k"/></g>`,
		"fallback": "lucide:shopping-cart",
	});
}

export default Component;

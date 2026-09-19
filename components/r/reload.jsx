import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mo071dbej.css';
import '../../css/a/apap_ab6a.css';
import '../../css/w/w3a_f7b_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mo071dbej"/><path class="apap_ab6a"/><path class="w3a_f7b_k"/></g>`,
		"fallback": "pepicons:reload",
	});
}

export default Component;

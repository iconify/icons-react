import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uetekk69h.css';
import '../../css/t/tl9uo1t8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uetekk69h"/><path class="tl9uo1t8v"/></g>`,
		"fallback": "lucide:train-front",
	});
}

export default Component;

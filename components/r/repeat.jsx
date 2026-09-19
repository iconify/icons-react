import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/paar76b2v.css';
import '../../css/l/lnnf6-b_c.css';
import '../../css/q/qu5ga3b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="paar76b2v"/><path class="lnnf6-b_c"/><path class="qu5ga3b3a"/></g>`,
		"fallback": "feather:repeat",
	});
}

export default Component;

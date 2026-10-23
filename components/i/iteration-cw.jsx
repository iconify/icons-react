import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z3iq_nbdu.css';
import '../../css/f/f18kvd3vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z3iq_nbdu"/><path class="f18kvd3vp"/></g>`,
		"fallback": "vadivam:iteration-cw",
	});
}

export default Component;

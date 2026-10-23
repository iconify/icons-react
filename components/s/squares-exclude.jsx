import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/smcjm_bde.css';
import '../../css/l/lcloizb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="smcjm_bde"/><path class="lcloizb8c"/></g>`,
		"fallback": "vadivam:squares-exclude",
	});
}

export default Component;
